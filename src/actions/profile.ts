"use server";

import bcrypt from "bcryptjs";
import { AuditAction, AuditEntityType, NotificationType, Role } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireRole } from "@/lib/auth/session";
import { verifyPassword } from "@/lib/auth/password";
import { createAuditLog } from "@/lib/audit";
import { prisma } from "@/lib/db";
import { notifyUser } from "@/lib/notifications";
import { changePasswordSchema, updateProfileSchema } from "@/lib/validators";

function profileRedirect(query: string): never {
  redirect(`/morador/perfil?${query}`);
}

export async function updateResidentProfileAction(formData: FormData) {
  const session = await requireRole(Role.RESIDENT);

  const parsed = updateProfileSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone")
  });

  if (!parsed.success) {
    profileRedirect(`error=${encodeURIComponent(parsed.error.issues[0]?.message ?? "Dados invalidos.")}`);
  }

  const data = parsed.success ? parsed.data : null;

  if (!data) {
    profileRedirect(`error=${encodeURIComponent("Dados invalidos.")}`);
  }

  const emailInUse = await prisma.user.findFirst({
    where: {
      email: data.email,
      id: {
        not: session.user.id
      }
    }
  });

  if (emailInUse) {
    profileRedirect(`error=${encodeURIComponent("Ja existe outro usuario com este e-mail.")}`);
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone
    }
  });

  await createAuditLog({
    actorId: session.user.id,
    action: AuditAction.PROFILE_UPDATED,
    entityType: AuditEntityType.USER,
    entityId: session.user.id,
    description: "Morador atualizou seus dados de perfil.",
    context: {
      email: data.email
    }
  });

  revalidatePath("/morador/perfil");
  revalidatePath("/morador/dashboard");
  profileRedirect("status=profile-updated");
}

export async function changeResidentPasswordAction(formData: FormData) {
  const session = await requireRole(Role.RESIDENT);

  const parsed = changePasswordSchema.safeParse({
    currentPassword: formData.get("currentPassword"),
    newPassword: formData.get("newPassword")
  });

  if (!parsed.success) {
    profileRedirect(`error=${encodeURIComponent(parsed.error.issues[0]?.message ?? "Senha invalida.")}`);
  }

  const data = parsed.success ? parsed.data : null;

  if (!data) {
    profileRedirect(`error=${encodeURIComponent("Senha invalida.")}`);
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id
    }
  });

  if (!user) {
    profileRedirect(`error=${encodeURIComponent("Usuario nao encontrado.")}`);
  }

  const isCurrentPasswordValid = await verifyPassword(
    data.currentPassword,
    user.passwordHash
  );

  if (!isCurrentPasswordValid) {
    profileRedirect(`error=${encodeURIComponent("A senha atual nao confere.")}`);
  }

  const passwordHash = await bcrypt.hash(data.newPassword, 10);

  await prisma.user.update({
    where: { id: session.user.id },
    data: {
      passwordHash,
      mustChangePassword: false
    }
  });

  await createAuditLog({
    actorId: session.user.id,
    action: AuditAction.RESIDENT_PASSWORD_CHANGED,
    entityType: AuditEntityType.USER,
    entityId: session.user.id,
    description: "Morador alterou sua propria senha."
  });

  await notifyUser({
    actorId: session.user.id,
    userId: session.user.id,
    type: NotificationType.PROFILE_SECURITY,
    title: "Senha atualizada com sucesso",
    message: "Seu acesso foi protegido com a nova senha cadastrada."
  });

  revalidatePath("/morador/perfil");
  profileRedirect("status=password-updated");
}
