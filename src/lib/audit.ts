import { AuditAction, AuditEntityType } from "@/lib/prisma";

import { prisma } from "@/lib/db";

type CreateAuditLogInput = {
  action: AuditAction;
  entityType: AuditEntityType;
  description: string;
  actorId?: string | null;
  entityId?: string | null;
  context?: unknown;
};

function serializeContext(context: unknown) {
  if (context === undefined) {
    return null;
  }

  return JSON.stringify(context);
}

export async function createAuditLog({
  action,
  entityType,
  description,
  actorId,
  entityId,
  context
}: CreateAuditLogInput) {
  await prisma.auditLog.create({
    data: {
      action,
      entityType,
      entityId: entityId ?? null,
      actorId: actorId ?? null,
      description,
      context: serializeContext(context)
    }
  });
}
