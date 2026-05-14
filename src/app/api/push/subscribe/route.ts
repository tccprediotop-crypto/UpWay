import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { AuditAction, AuditEntityType, Role } from "@/lib/prisma";

import { authOptions } from "@/lib/auth/options";
import { createAuditLog } from "@/lib/audit";
import { prisma } from "@/lib/db";

type PushBody = {
  endpoint?: string;
  keys?: {
    p256dh?: string;
    auth?: string;
  };
};

async function requireResidentSession() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== Role.RESIDENT) {
    return null;
  }

  return session;
}

export async function POST(request: Request) {
  const session = await requireResidentSession();

  if (!session) {
    return NextResponse.json({ error: "Nao autorizado." }, { status: 401 });
  }

  const body = (await request.json()) as PushBody;

  if (!body.endpoint || !body.keys?.p256dh || !body.keys.auth) {
    return NextResponse.json({ error: "Payload de push invalido." }, { status: 400 });
  }

  await prisma.pushSubscription.upsert({
    where: {
      endpoint: body.endpoint
    },
    update: {
      p256dh: body.keys.p256dh,
      auth: body.keys.auth,
      userAgent: request.headers.get("user-agent")
    },
    create: {
      endpoint: body.endpoint,
      p256dh: body.keys.p256dh,
      auth: body.keys.auth,
      userAgent: request.headers.get("user-agent"),
      userId: session.user.id
    }
  });

  await createAuditLog({
    actorId: session.user.id,
    action: AuditAction.PUSH_SUBSCRIBED,
    entityType: AuditEntityType.USER,
    entityId: session.user.id,
    description: "Morador habilitou notificacoes push no dispositivo.",
    context: {
      endpoint: body.endpoint
    }
  });

  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const session = await requireResidentSession();

  if (!session) {
    return NextResponse.json({ error: "Nao autorizado." }, { status: 401 });
  }

  const body = (await request.json()) as PushBody;

  if (!body.endpoint) {
    return NextResponse.json({ error: "Endpoint nao informado." }, { status: 400 });
  }

  await prisma.pushSubscription.deleteMany({
    where: {
      endpoint: body.endpoint,
      userId: session.user.id
    }
  });

  await createAuditLog({
    actorId: session.user.id,
    action: AuditAction.PUSH_UNSUBSCRIBED,
    entityType: AuditEntityType.USER,
    entityId: session.user.id,
    description: "Morador desativou notificacoes push no dispositivo.",
    context: {
      endpoint: body.endpoint
    }
  });

  return NextResponse.json({ ok: true });
}
