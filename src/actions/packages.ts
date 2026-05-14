"use server";

import { addDays } from "date-fns";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  AuditAction,
  AuditEntityType,
  HistoryType,
  NotificationType,
  PackageStatus,
  Role
} from "@/lib/prisma";

import { requireRole } from "@/lib/auth/session";
import { createAuditLog } from "@/lib/audit";
import { prisma } from "@/lib/db";
import { notifyUser } from "@/lib/notifications";
import { buildPickupCode, tokenExpiry } from "@/lib/packages";
import { createPackageSchema, validateTokenSchema } from "@/lib/validators";

export async function createPackageAction(formData: FormData) {
  const session = await requireRole(Role.PORTER);

  const parsed = createPackageSchema.safeParse({
    trackingCode: formData.get("trackingCode"),
    carrier: formData.get("carrier"),
    description: formData.get("description") || undefined,
    residentId: formData.get("residentId")
  });

  if (!parsed.success) {
    redirect(
      `/porteiro/encomendas/nova?error=${encodeURIComponent(
        parsed.error.issues[0]?.message ?? "Dados invalidos."
      )}`
    );
  }

  const data = parsed.success ? parsed.data : null;

  if (!data) {
    redirect("/porteiro/encomendas/nova?error=Dados invalidos.");
  }

  const resident = await prisma.user.findFirst({
    where: {
      id: data.residentId,
      role: Role.RESIDENT,
      isActive: true
    },
    include: {
      unit: true
    }
  });

  if (!resident?.unitId || !resident.unit) {
    redirect("/porteiro/encomendas/nova?error=Morador sem unidade vinculada.");
  }

  const existingPackage = await prisma.package.findUnique({
    where: {
      trackingCode: data.trackingCode
    }
  });

  if (existingPackage) {
    redirect("/porteiro/encomendas/nova?error=Este codigo de rastreamento ja esta cadastrado.");
  }

  const now = new Date();
  const pkg = await prisma.package.create({
    data: {
      trackingCode: data.trackingCode,
      carrier: data.carrier,
      description: data.description,
      status: PackageStatus.NOTIFIED,
      receivedAt: now,
      notifiedAt: now,
      dueAt: addDays(now, 3),
      notificationSent: true,
      residentId: resident.id,
      unitId: resident.unitId,
      receivedById: session.user.id
    }
  });

  await prisma.packageHistory.createMany({
    data: [
      {
        packageId: pkg.id,
        actorId: session.user.id,
        type: HistoryType.CREATED,
        note: `Encomenda ${pkg.trackingCode} cadastrada na portaria para ${resident.name}.`,
        toStatus: PackageStatus.RECEIVED
      },
      {
        packageId: pkg.id,
        actorId: session.user.id,
        type: HistoryType.NOTIFIED,
        note: `${resident.name} foi notificado automaticamente no app.`,
        fromStatus: PackageStatus.RECEIVED,
        toStatus: PackageStatus.NOTIFIED
      }
    ]
  });

  await createAuditLog({
    actorId: session.user.id,
    action: AuditAction.PACKAGE_CREATED,
    entityType: AuditEntityType.PACKAGE,
    entityId: pkg.id,
    description: `Encomenda ${pkg.trackingCode} cadastrada para ${resident.name}.`,
    context: {
      residentId: resident.id,
      unitId: resident.unitId
    }
  });

  await notifyUser({
    actorId: session.user.id,
    userId: resident.id,
    type: NotificationType.PACKAGE_UPDATE,
    title: "Nova encomenda recebida",
    message: `A encomenda ${pkg.trackingCode} ja esta disponivel para retirada na portaria.`,
    href: `/morador/encomendas/${pkg.id}`
  });

  revalidatePath("/porteiro/dashboard");
  revalidatePath("/porteiro/encomendas");
  revalidatePath("/porteiro/historico");
  revalidatePath("/morador/dashboard");
  revalidatePath("/morador/encomendas");

  redirect(`/porteiro/encomendas/${pkg.id}?created=1`);
}

export async function generatePickupTokenAction(formData: FormData) {
  const session = await requireRole(Role.RESIDENT);
  const packageId = String(formData.get("packageId") ?? "");

  const pkg = await prisma.package.findFirst({
    where: {
      id: packageId,
      residentId: session.user.id
    },
    include: {
      resident: true,
      token: true
    }
  });

  if (!pkg) {
    redirect("/morador/encomendas?error=Encomenda nao encontrada.");
  }

  if (pkg.status === PackageStatus.PICKED_UP) {
    redirect(`/morador/encomendas/${pkg.id}?error=Essa encomenda ja foi retirada.`);
  }

  const code = buildPickupCode(pkg.trackingCode, pkg.resident.name);
  const expiresAt = tokenExpiry();

  await prisma.pickupToken.upsert({
    where: {
      packageId: pkg.id
    },
    update: {
      code,
      qrValue: `upway://pickup/${code}`,
      generatedAt: new Date(),
      expiresAt,
      usedAt: null,
      validatedById: null,
      generatedById: session.user.id
    },
    create: {
      packageId: pkg.id,
      code,
      qrValue: `upway://pickup/${code}`,
      expiresAt,
      generatedById: session.user.id
    }
  });

  if (pkg.status !== PackageStatus.TOKEN_GENERATED) {
    await prisma.package.update({
      where: { id: pkg.id },
      data: { status: PackageStatus.TOKEN_GENERATED }
    });
  }

  await prisma.packageHistory.create({
    data: {
      packageId: pkg.id,
      actorId: session.user.id,
      type: HistoryType.TOKEN_GENERATED,
      note: `${pkg.resident.name} gerou um token unico para retirada.`,
      fromStatus: pkg.status,
      toStatus: PackageStatus.TOKEN_GENERATED
    }
  });

  await createAuditLog({
    actorId: session.user.id,
    action: AuditAction.TOKEN_GENERATED,
    entityType: AuditEntityType.PACKAGE,
    entityId: pkg.id,
    description: `${pkg.resident.name} gerou um token para a encomenda ${pkg.trackingCode}.`
  });

  await notifyUser({
    actorId: session.user.id,
    userId: session.user.id,
    type: NotificationType.TOKEN_READY,
    title: "Token de retirada ativo",
    message: `Seu token para a encomenda ${pkg.trackingCode} esta pronto para uso.`,
    href: `/morador/token/${pkg.id}`
  });

  revalidatePath("/morador/dashboard");
  revalidatePath("/morador/encomendas");
  revalidatePath("/morador/token");
  revalidatePath("/porteiro/retirada");
  revalidatePath("/porteiro/historico");

  redirect(`/morador/token/${pkg.id}?generated=1`);
}

export type TokenValidationState = {
  status: "idle" | "error" | "success";
  message?: string;
  packageId?: string;
};

export async function validatePickupTokenAction(
  _previousState: TokenValidationState,
  formData: FormData
): Promise<TokenValidationState> {
  const session = await requireRole(Role.PORTER);

  const parsed = validateTokenSchema.safeParse({
    code: formData.get("code")
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Token invalido."
    };
  }

  const code = parsed.data?.code;

  if (!code) {
    return {
      status: "error",
      message: "Token invalido."
    };
  }

  const token = await prisma.pickupToken.findFirst({
    where: {
      OR: [{ code }, { package: { trackingCode: code } }]
    },
    include: {
      package: {
        include: {
          resident: true,
          unit: true
        }
      }
    }
  });

  if (!token) {
    return {
      status: "error",
      message: "Token nao encontrado. Peca ao morador para gerar um token valido."
    };
  }

  if (token.usedAt) {
    return {
      status: "error",
      message: "Este token ja foi utilizado anteriormente."
    };
  }

  if (token.expiresAt.getTime() < Date.now()) {
    return {
      status: "error",
      message: "Token expirado. O morador precisa gerar um novo token."
    };
  }

  if (token.package.status !== PackageStatus.TOKEN_GENERATED) {
    return {
      status: "error",
      message: "A encomenda ainda nao esta pronta para validacao de retirada."
    };
  }

  await prisma.$transaction([
    prisma.pickupToken.update({
      where: {
        id: token.id
      },
      data: {
        usedAt: new Date(),
        validatedById: session.user.id
      }
    }),
    prisma.package.update({
      where: {
        id: token.packageId
      },
      data: {
        status: PackageStatus.PICKED_UP,
        pickedUpAt: new Date()
      }
    }),
    prisma.packageHistory.create({
      data: {
        packageId: token.packageId,
        actorId: session.user.id,
        type: HistoryType.PICKED_UP,
        note: `Retirada validada para ${token.package.resident.name} na unidade ${token.package.unit.label}.`,
        fromStatus: PackageStatus.TOKEN_GENERATED,
        toStatus: PackageStatus.PICKED_UP
      }
    })
  ]);

  await createAuditLog({
    actorId: session.user.id,
    action: AuditAction.TOKEN_VALIDATED,
    entityType: AuditEntityType.PACKAGE,
    entityId: token.packageId,
    description: `Retirada da encomenda ${token.package.trackingCode} validada pela portaria.`
  });

  await notifyUser({
    actorId: session.user.id,
    userId: token.package.residentId,
    type: NotificationType.PACKAGE_UPDATE,
    title: "Retirada confirmada",
    message: `A encomenda ${token.package.trackingCode} foi marcada como retirada com sucesso.`,
    href: `/morador/encomendas/${token.packageId}`
  });

  revalidatePath("/porteiro/dashboard");
  revalidatePath("/porteiro/encomendas");
  revalidatePath("/porteiro/retirada");
  revalidatePath("/porteiro/historico");
  revalidatePath("/morador/dashboard");
  revalidatePath("/morador/encomendas");
  revalidatePath("/morador/token");

  return {
    status: "success",
    message: `Retirada de ${token.package.resident.name} validada com sucesso.`,
    packageId: token.packageId
  };
}
