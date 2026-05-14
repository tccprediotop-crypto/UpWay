"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

import { AuditAction, AuditEntityType, NotificationType, Role } from "@/lib/prisma";

import { createAuditLog } from "@/lib/audit";
import { prisma } from "@/lib/db";
import { notifyUser } from "@/lib/notifications";
import { registerPorterSchema, registerResidentSchema } from "@/lib/validators";

function signupErrorRedirect(path: string, message: string): never {
  redirect(`${path}?error=${encodeURIComponent(message)}`);
}

function normalizeTowerName(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function normalizeUnitNumber(value: string) {
  return value.trim().toUpperCase();
}

async function resolveResidentUnit(input: {
  floor?: number;
  towerName: string;
  unitNumber: string;
}) {
  const tower = await prisma.tower.upsert({
    where: {
      name: normalizeTowerName(input.towerName)
    },
    update: {},
    create: {
      name: normalizeTowerName(input.towerName)
    }
  });

  const unitNumber = normalizeUnitNumber(input.unitNumber);
  const existingUnit = await prisma.unit.findFirst({
    where: {
      towerId: tower.id,
      number: unitNumber
    }
  });

  if (existingUnit) {
    return {
      tower,
      unit: existingUnit
    };
  }

  const unit = await prisma.unit.create({
    data: {
      towerId: tower.id,
      number: unitNumber,
      label: `Apt ${unitNumber}`,
      floor: input.floor
    }
  });

  return {
    tower,
    unit
  };
}

export async function registerResidentAccountAction(formData: FormData) {
  const parsed = registerResidentSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    towerName: formData.get("towerName"),
    unitNumber: formData.get("unitNumber"),
    floor: formData.get("floor") || undefined,
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword")
  });

  if (!parsed.success) {
    signupErrorRedirect(
      "/cadastro/morador",
      parsed.error.issues[0]?.message ?? "Nao foi possivel criar a conta."
    );
  }

  const data = parsed.data;
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email
    }
  });

  if (existingUser) {
    signupErrorRedirect("/cadastro/morador", "Ja existe uma conta cadastrada com este e-mail.");
  }

  const { tower, unit } = await resolveResidentUnit({
    towerName: data.towerName,
    unitNumber: data.unitNumber,
    floor: data.floor
  });
  const passwordHash = await bcrypt.hash(data.password, 10);

  const resident = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: Role.RESIDENT,
      unitId: unit.id,
      passwordHash,
      mustChangePassword: false
    }
  });

  await createAuditLog({
    actorId: resident.id,
    action: AuditAction.RESIDENT_CREATED,
    entityType: AuditEntityType.USER,
    entityId: resident.id,
    description: `${resident.name} criou a propria conta de morador.`,
    context: {
      selfService: true,
      towerName: tower.name,
      unitId: unit.id,
      unitLabel: unit.label
    }
  });

  const operationalUsers = await prisma.user.findMany({
    where: {
      isActive: true,
      role: {
        in: [Role.ADMIN, Role.PORTER]
      }
    }
  });

  await Promise.all(
    operationalUsers.map((user) =>
      notifyUser({
        actorId: resident.id,
        userId: user.id,
        type: NotificationType.OPERATIONAL,
        title: "Novo morador cadastrado",
        message: `${resident.name} criou a conta da unidade ${unit.label} (${tower.name}).`,
        href: "/porteiro/moradores"
      })
    )
  );

  redirect("/login?status=resident-account-created");
}

export async function registerBootstrapPorterAction(formData: FormData) {
  const parsed = registerPorterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    jobTitle: formData.get("jobTitle") || undefined,
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword")
  });

  if (!parsed.success) {
    signupErrorRedirect(
      "/cadastro/porteiro",
      parsed.error.issues[0]?.message ?? "Nao foi possivel criar a conta operacional."
    );
  }

  const hasOperationalUsers = await prisma.user.count({
    where: {
      isActive: true,
      role: {
        in: [Role.ADMIN, Role.PORTER]
      }
    }
  });

  if (hasOperationalUsers > 0) {
    signupErrorRedirect(
      "/cadastro/porteiro",
      "Ja existe uma conta operacional ativa. Entre no sistema para gerir a equipe."
    );
  }

  const data = parsed.data;
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email
    }
  });

  if (existingUser) {
    signupErrorRedirect("/cadastro/porteiro", "Ja existe uma conta cadastrada com este e-mail.");
  }

  const passwordHash = await bcrypt.hash(data.password, 10);

  const porter = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      jobTitle: data.jobTitle || "Porteiro",
      role: Role.PORTER,
      passwordHash,
      mustChangePassword: false
    }
  });

  await createAuditLog({
    actorId: porter.id,
    action: AuditAction.PORTER_CREATED,
    entityType: AuditEntityType.USER,
    entityId: porter.id,
    description: `${porter.name} criou a primeira conta operacional da portaria.`,
    context: {
      bootstrap: true,
      jobTitle: porter.jobTitle
    }
  });

  redirect("/login?status=porter-account-created");
}
