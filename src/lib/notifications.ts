import webpush from "web-push";

import {
  AuditAction,
  AuditEntityType,
  DeliveryChannel,
  DeliveryStatus,
  NotificationType
} from "@/lib/prisma";

import { createAuditLog } from "@/lib/audit";
import { prisma } from "@/lib/db";

type NotifyUserInput = {
  actorId?: string | null;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  href?: string;
};

type StoredPushSubscription = {
  endpoint: string;
  p256dh: string;
  auth: string;
};

function getWebPushConfig() {
  const publicKey = process.env.WEB_PUSH_PUBLIC_KEY;
  const privateKey = process.env.WEB_PUSH_PRIVATE_KEY;
  const subject = process.env.WEB_PUSH_SUBJECT;

  if (!publicKey || !privateKey || !subject) {
    return null;
  }

  webpush.setVapidDetails(subject, publicKey, privateKey);

  return { publicKey, privateKey, subject };
}

async function createDeliveryLog(input: {
  notificationId: string;
  channel: DeliveryChannel;
  status: DeliveryStatus;
  recipient?: string | null;
  providerMessageId?: string | null;
  errorMessage?: string | null;
}) {
  return prisma.notificationDelivery.create({
    data: {
      notificationId: input.notificationId,
      channel: input.channel,
      status: input.status,
      recipient: input.recipient ?? null,
      providerMessageId: input.providerMessageId ?? null,
      errorMessage: input.errorMessage ?? null,
      attemptedAt: new Date()
    }
  });
}

async function sendPushNotifications({
  notificationId,
  userId,
  subscriptions,
  title,
  message,
  href
}: {
  notificationId: string;
  userId: string;
  subscriptions: StoredPushSubscription[];
  title: string;
  message: string;
  href?: string;
}) {
  if (subscriptions.length === 0) {
    return;
  }

  const vapidConfig = getWebPushConfig();

  if (!vapidConfig) {
    await createDeliveryLog({
      notificationId,
      channel: DeliveryChannel.PUSH,
      status: DeliveryStatus.SKIPPED,
      errorMessage: "WEB_PUSH_PUBLIC_KEY/PRIVATE_KEY/SUBJECT nao configurados."
    });
    return;
  }

  const payload = JSON.stringify({
    title,
    body: message,
    url: href ?? "/"
  });

  for (const subscription of subscriptions) {
    try {
      const response = await webpush.sendNotification(
        {
          endpoint: subscription.endpoint,
          keys: {
            p256dh: subscription.p256dh,
            auth: subscription.auth
          }
        },
        payload
      );

      await createDeliveryLog({
        notificationId,
        channel: DeliveryChannel.PUSH,
        status: DeliveryStatus.SENT,
        recipient: subscription.endpoint,
        providerMessageId: response.headers?.location ?? null
      });

      await createAuditLog({
        actorId: userId,
        action: AuditAction.NOTIFICATION_DELIVERED,
        entityType: AuditEntityType.NOTIFICATION,
        entityId: notificationId,
        description: `Push enviado para o endpoint ${subscription.endpoint}.`
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Falha desconhecida ao enviar push.";

      if (
        typeof error === "object" &&
        error &&
        "statusCode" in error &&
        (error.statusCode === 404 || error.statusCode === 410)
      ) {
        await prisma.pushSubscription.deleteMany({
          where: {
            endpoint: subscription.endpoint
          }
        });
      }

      await createDeliveryLog({
        notificationId,
        channel: DeliveryChannel.PUSH,
        status: DeliveryStatus.FAILED,
        recipient: subscription.endpoint,
        errorMessage: message
      });

      await createAuditLog({
        actorId: userId,
        action: AuditAction.NOTIFICATION_FAILED,
        entityType: AuditEntityType.NOTIFICATION,
        entityId: notificationId,
        description: `Falha no envio push para o endpoint ${subscription.endpoint}.`,
        context: { error: message }
      });
    }
  }
}

async function sendWhatsAppNotification({
  notificationId,
  userId,
  recipientName,
  phone,
  title,
  message,
  href
}: {
  notificationId: string;
  userId: string;
  recipientName: string;
  phone?: string | null;
  title: string;
  message: string;
  href?: string;
}) {
  const webhookUrl = process.env.WHATSAPP_WEBHOOK_URL;

  if (!phone) {
    await createDeliveryLog({
      notificationId,
      channel: DeliveryChannel.WHATSAPP,
      status: DeliveryStatus.SKIPPED,
      errorMessage: "Morador sem telefone cadastrado."
    });
    return;
  }

  if (!webhookUrl) {
    await createDeliveryLog({
      notificationId,
      channel: DeliveryChannel.WHATSAPP,
      status: DeliveryStatus.SKIPPED,
      recipient: phone,
      errorMessage: "WHATSAPP_WEBHOOK_URL nao configurado."
    });
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.WHATSAPP_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.WHATSAPP_WEBHOOK_TOKEN}` }
          : {})
      },
      body: JSON.stringify({
        userId,
        notificationId,
        name: recipientName,
        phone,
        title,
        message,
        href
      })
    });

    if (!response.ok) {
      throw new Error(`Webhook WhatsApp respondeu com status ${response.status}.`);
    }

    await createDeliveryLog({
      notificationId,
      channel: DeliveryChannel.WHATSAPP,
      status: DeliveryStatus.SENT,
      recipient: phone
    });

    await createAuditLog({
      actorId: userId,
      action: AuditAction.NOTIFICATION_DELIVERED,
      entityType: AuditEntityType.NOTIFICATION,
      entityId: notificationId,
      description: `Mensagem de WhatsApp enviada para ${phone}.`
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Falha desconhecida ao enviar WhatsApp.";

    await createDeliveryLog({
      notificationId,
      channel: DeliveryChannel.WHATSAPP,
      status: DeliveryStatus.FAILED,
      recipient: phone,
      errorMessage
    });

    await createAuditLog({
      actorId: userId,
      action: AuditAction.NOTIFICATION_FAILED,
      entityType: AuditEntityType.NOTIFICATION,
      entityId: notificationId,
      description: `Falha no envio de WhatsApp para ${phone}.`,
      context: { error: errorMessage }
    });
  }
}

export async function notifyUser({
  actorId,
  userId,
  type,
  title,
  message,
  href
}: NotifyUserInput) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    },
    include: {
      pushSubscriptions: true
    }
  });

  if (!user) {
    return null;
  }

  const notification = await prisma.notification.create({
    data: {
      userId,
      type,
      title,
      message,
      href
    }
  });

  await createDeliveryLog({
    notificationId: notification.id,
    channel: DeliveryChannel.IN_APP,
    status: DeliveryStatus.SENT,
    recipient: user.email
  });

  await Promise.all([
    sendPushNotifications({
      notificationId: notification.id,
      userId: actorId ?? userId,
      subscriptions: user.pushSubscriptions,
      title,
      message,
      href
    }),
    sendWhatsAppNotification({
      notificationId: notification.id,
      userId: actorId ?? userId,
      recipientName: user.name,
      phone: user.phone,
      title,
      message,
      href
    })
  ]);

  return notification;
}
