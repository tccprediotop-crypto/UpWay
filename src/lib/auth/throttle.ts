import { prisma } from "@/lib/db";

type ThrottleConfig = {
  blockMs: number;
  maxAttempts: number;
  scope: string;
  windowMs: number;
};

type ThrottleResult = {
  allowed: boolean;
  retryAfterSeconds?: number;
};

export const loginThrottleConfig: ThrottleConfig = {
  scope: "login",
  maxAttempts: 5,
  windowMs: 15 * 60_000,
  blockMs: 15 * 60_000
};

function buildId(scope: string, key: string) {
  return `${scope}:${key}`;
}

function secondsUntil(date: Date) {
  return Math.max(1, Math.ceil((date.getTime() - Date.now()) / 1000));
}

export async function ensureThrottleAllows(key: string, config: ThrottleConfig): Promise<ThrottleResult> {
  const record = await prisma.authThrottle.findUnique({
    where: {
      id: buildId(config.scope, key)
    }
  });

  if (!record?.blockedUntil || record.blockedUntil.getTime() <= Date.now()) {
    return {
      allowed: true
    };
  }

  return {
    allowed: false,
    retryAfterSeconds: secondsUntil(record.blockedUntil)
  };
}

export async function registerThrottleFailure(key: string, config: ThrottleConfig): Promise<ThrottleResult> {
  const now = new Date();
  const id = buildId(config.scope, key);
  const record = await prisma.authThrottle.findUnique({
    where: {
      id
    }
  });

  if (!record) {
    await prisma.authThrottle.create({
      data: {
        id,
        scope: config.scope,
        key,
        attempts: 1,
        windowStartedAt: now
      }
    });

    return {
      allowed: true
    };
  }

  if (record.blockedUntil && record.blockedUntil.getTime() > now.getTime()) {
    return {
      allowed: false,
      retryAfterSeconds: secondsUntil(record.blockedUntil)
    };
  }

  const windowExpiresAt = new Date(record.windowStartedAt.getTime() + config.windowMs);

  if (windowExpiresAt.getTime() <= now.getTime()) {
    await prisma.authThrottle.update({
      where: {
        id
      },
      data: {
        attempts: 1,
        blockedUntil: null,
        windowStartedAt: now
      }
    });

    return {
      allowed: true
    };
  }

  const nextAttempts = record.attempts + 1;
  const blockedUntil = nextAttempts > config.maxAttempts ? new Date(now.getTime() + config.blockMs) : null;

  await prisma.authThrottle.update({
    where: {
      id
    },
    data: {
      attempts: nextAttempts,
      blockedUntil
    }
  });

  if (!blockedUntil) {
    return {
      allowed: true
    };
  }

  return {
    allowed: false,
    retryAfterSeconds: secondsUntil(blockedUntil)
  };
}

export async function clearThrottle(key: string, config: ThrottleConfig) {
  await prisma.authThrottle.deleteMany({
    where: {
      id: buildId(config.scope, key)
    }
  });
}
