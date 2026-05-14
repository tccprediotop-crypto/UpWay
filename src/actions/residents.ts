"use server";

import bcrypt from "bcryptjs";
import { AuditAction, AuditEntityType, NotificationType, Role } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireRole } from "@/lib/auth/session";
import { createAuditLog } from "@/lib/audit";
import { prisma } from "@/lib/db";
import { notifyUser } from "@/lib/notifications";
import {
  createResidentSchema,
  createUnitSchema,
  updateResidentSchema
} from "@/lib/validators";

function residentsErrorRedirect(message: string): never {
  redirect(`/porteiro/moradores?error=${encodeURIComponent(message)}`);
}

function residentsSuccessRedirect(status: string): never {
  redirect(`/porteiro/moradores?status=${status}`);
}

export async function createResidentAction(formData: FormData) {
  const session = await requireRole(Role.PORTER);

  const parsed = createResidentSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    unitId: formData.get("unitId"),
    password: formData.get("password")
  });

  if (!parsed.success) {
    residentsErrorRedirect(parsed.error.issues[0]?.message ?? "Dados invalidos.");
  }

  const data = parsed.success ? parsed.data : null;

  if (!data) {
    residentsErrorRedirect("Dados invalidos.");
  }

  const existing = await prisma.user.findUnique({
    where: {
      email: data.email
    }
  });

  if (existing) {
    residentsErrorRedirect("Ja existe um usuario cadastrado com este e-mail.");
  }

  const passwordHash = await bcrypt.hash(data.password, 10);

  const resident = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: Role.RESIDENT,
      unitId: data.unitId,
      passwordHash,
      mustChangePassword: true
    }
  });

  await createAuditLog({
    actorId: session.user.id,
    action: AuditAction.RESIDENT_CREATED,
    entityType: AuditEntityType.USER,
    entityId: resident.id,
    description: `Perfil de morador criado para ${resident.name}.`,
    context: { email: resident.email, unitId: resident.unitId }
  });

  await notifyUser({
    actorId: session.user.id,
    userId: resident.id,
    type: NotificationType.PROFILE_SECURITY,
    title: "Acesso ao UpWay liberado",
    message: "Seu cadastro foi criado. Acesse com a senha inicial e atualize seus dados no perfil."
  });

  revalidatePath("/porteiro/moradores");
  residentsSuccessRedirect("resident-created");
}

export async function updateResidentAction(formData: FormData) {
  const session = await requireRole(Role.PORTER);

  const parsed = updateResidentSchema.safeParse({
    residentId: formData.get("residentId"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    unitId: formData.get("unitId"),
    password: formData.get("password") || undefined
  });

  if (!parsed.success) {
    redirect(
      `/porteiro/moradores/${String(formData.get("residentId") ?? "")}?error=${encodeURIComponent(
        parsed.error.issues[0]?.message ?? "Dados invalidos."
      )}`
    );
  }

  const data = parsed.success ? parsed.data : null;

  if (!data) {
    residentsErrorRedirect("Dados invalidos.");
  }

  const resident = await prisma.user.findFirst({
    where: {
      id: data.residentId,
      role: Role.RESIDENT
    }
  });

  if (!resident) {
    residentsErrorRedirect("Morador nao encontrado.");
  }

  const emailInUse = await prisma.user.findFirst({
    where: {
      email: data.email,
      id: {
        not: data.residentId
      }
    }
  });

  if (emailInUse) {
    redirect(
      `/porteiro/moradores/${data.residentId}?error=${encodeURIComponent(
        "Ja existe outro usuario com este e-mail."
      )}`
    );
  }

  const passwordHash =
    data.password && data.password.length >= 8
      ? await bcrypt.hash(data.password, 10)
      : undefined;

  await prisma.user.update({
    where: { id: data.residentId },
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      unitId: data.unitId,
      ...(passwordHash
        ? {
            passwordHash,
            mustChangePassword: true
          }
        : {})
    }
  });

  await createAuditLog({
    actorId: session.user.id,
    action: passwordHash ? AuditAction.RESIDENT_PASSWORD_CHANGED : AuditAction.RESIDENT_UPDATED,
    entityType: AuditEntityType.USER,
    entityId: data.residentId,
    description: passwordHash
      ? `Cadastro e senha de ${data.name} foram atualizados pela portaria.`
      : `Cadastro de ${data.name} foi atualizado pela portaria.`,
    context: {
      email: data.email,
      unitId: data.unitId
    }
  });

  if (passwordHash) {
    await notifyUser({
      actorId: session.user.id,
      userId: data.residentId,
      type: NotificationType.PROFILE_SECURITY,
      title: "Senha redefinida pela portaria",
      message: "Sua senha foi atualizada. No proximo acesso, revise seus dados e confirme o novo login."
    });
  }

  revalidatePath("/porteiro/moradores");
  revalidatePath(`/porteiro/moradores/${data.residentId}`);
  redirect(`/porteiro/moradores/${data.residentId}?status=updated`);
}

export async function archiveResidentAction(formData: FormData) {
  const session = await requireRole(Role.PORTER);
  const residentId = String(formData.get("residentId") ?? "");

  const resident = await prisma.user.findFirst({
    where: {
      id: residentId,
      role: Role.RESIDENT
    }
  });

  if (!resident) {
    residentsErrorRedirect("Morador nao encontrado.");
  }

  await prisma.user.update({
    where: { id: residentId },
    data: {
      isActive: false,
      deletedAt: new Date(),
      email: `arquivado-${resident.id}@upway.local`,
      phone: null,
      mustChangePassword: false
    }
  });

  await createAuditLog({
    actorId: session.user.id,
    action: AuditAction.RESIDENT_ARCHIVED,
    entityType: AuditEntityType.USER,
    entityId: resident.id,
    description: `Perfil de ${resident.name} foi arquivado sem remover o historico operacional.`,
    context: {
      originalEmail: resident.email
    }
  });

  revalidatePath("/porteiro/moradores");
  residentsSuccessRedirect("resident-archived");
}

export async function createUnitAction(formData: FormData) {
  const session = await requireRole(Role.PORTER);

  const parsed = createUnitSchema.safeParse({
    towerName: formData.get("towerName"),
    number: formData.get("number"),
    floor: formData.get("floor") || undefined
  });

  if (!parsed.success) {
    residentsErrorRedirect(parsed.error.issues[0]?.message ?? "Dados invalidos.");
  }

  const data = parsed.success ? parsed.data : null;

  if (!data) {
    residentsErrorRedirect("Dados invalidos.");
  }

  const tower = await prisma.tower.upsert({
    where: {
      name: data.towerName
    },
    update: {},
    create: {
      name: data.towerName
    }
  });

  const existingUnit = await prisma.unit.findFirst({
    where: {
      towerId: tower.id,
      number: data.number
    }
  });

  if (existingUnit) {
    residentsErrorRedirect("Este apartamento ja esta cadastrado para a torre informada.");
  }

  const unit = await prisma.unit.create({
    data: {
      towerId: tower.id,
      number: data.number,
      label: `Apt ${data.number}`,
      floor: data.floor
    }
  });

  await createAuditLog({
    actorId: session.user.id,
    action: AuditAction.UNIT_CREATED,
    entityType: AuditEntityType.UNIT,
    entityId: unit.id,
    description: `Apartamento ${unit.label} criado para a torre ${tower.name}.`,
    context: { floor: unit.floor }
  });

  revalidatePath("/porteiro/moradores");
  residentsSuccessRedirect("unit-created");
}
