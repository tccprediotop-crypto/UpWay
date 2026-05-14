"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { AuditAction, AuditEntityType, NotificationType, Role } from "@/lib/prisma";

import { requireRole } from "@/lib/auth/session";
import { createAuditLog } from "@/lib/audit";
import { prisma } from "@/lib/db";
import { notifyUser } from "@/lib/notifications";
import { registerPorterSchema } from "@/lib/validators";

function configurationRedirect(message: string, type: "error" | "status"): never {
  redirect(`/porteiro/configuracoes?${type}=${encodeURIComponent(message)}`);
}

export async function createPorterAction(formData: FormData) {
  const session = await requireRole(Role.PORTER);

  const parsed = registerPorterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    jobTitle: formData.get("jobTitle") || undefined,
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword")
  });

  if (!parsed.success) {
    configurationRedirect(parsed.error.issues[0]?.message ?? "Nao foi possivel criar a conta.", "error");
  }

  const data = parsed.data;
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email
    }
  });

  if (existingUser) {
    configurationRedirect("Ja existe uma conta cadastrada com este e-mail.", "error");
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
    actorId: session.user.id,
    action: AuditAction.PORTER_CREATED,
    entityType: AuditEntityType.USER,
    entityId: porter.id,
    description: `${porter.name} recebeu um novo acesso operacional.`,
    context: {
      createdBy: session.user.id,
      jobTitle: porter.jobTitle
    }
  });

  await notifyUser({
    actorId: session.user.id,
    userId: porter.id,
    type: NotificationType.PROFILE_SECURITY,
    title: "Conta operacional criada",
    message: "Seu acesso de portaria foi criado. Use as credenciais recebidas para entrar no sistema."
  });

  revalidatePath("/porteiro/configuracoes");
  configurationRedirect("porter-created", "status");
}
