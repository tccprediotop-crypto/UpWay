import { PackageStatus, Prisma, Role, type DeliveryStatus } from "@/lib/prisma";

import { prisma } from "@/lib/db";
import { summarizePackages } from "@/lib/packages";

const packageInclude = {
  resident: true,
  unit: {
    include: {
      tower: true
    }
  },
  receivedBy: true,
  token: true
} satisfies Prisma.PackageInclude;

export async function getNotifications(userId: string) {
  return prisma.notification.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 5
  });
}

export async function hasOperationalUsers() {
  const total = await prisma.user.count({
    where: {
      isActive: true,
      role: {
        in: [Role.ADMIN, Role.PORTER]
      }
    }
  });

  return total > 0;
}

export async function getOperationalUsers() {
  return prisma.user.findMany({
    where: {
      isActive: true,
      role: {
        in: [Role.ADMIN, Role.PORTER]
      }
    },
    orderBy: [{ role: "asc" }, { name: "asc" }]
  });
}

export async function getResidentPropertyLabel(unitId?: string | null) {
  if (process.env.PROPERTY_NAME) {
    return process.env.PROPERTY_NAME;
  }

  if (!unitId) {
    return "Condominio";
  }

  const unit = await prisma.unit.findUnique({
    where: {
      id: unitId
    },
    include: {
      tower: true
    }
  });

  return unit?.tower.name ?? "Condominio";
}

export async function getOperationalPropertyLabel() {
  if (process.env.PROPERTY_NAME) {
    return process.env.PROPERTY_NAME;
  }

  const tower = await prisma.tower.findFirst({
    orderBy: {
      name: "asc"
    }
  });

  return tower?.name ?? "Condominio";
}

export async function getPorterDashboardData() {
  const [packages, recentHistory] = await Promise.all([
    prisma.package.findMany({
      include: packageInclude,
      orderBy: { receivedAt: "desc" }
    }),
    prisma.packageHistory.findMany({
      include: {
        actor: true,
        package: {
          include: {
            resident: true
          }
        }
      },
      orderBy: { createdAt: "desc" },
      take: 8
    })
  ]);

  return {
    metrics: summarizePackages(packages),
    recentPackages: packages.slice(0, 6),
    recentHistory
  };
}

export async function getPorterPackages(search?: string) {
  const query = search?.trim();

  return prisma.package.findMany({
    where: query
      ? {
          OR: [
            { trackingCode: { contains: query } },
            { carrier: { contains: query } },
            { resident: { name: { contains: query } } },
            { unit: { label: { contains: query } } }
          ]
        }
      : undefined,
    include: packageInclude,
    orderBy: { receivedAt: "desc" }
  });
}

export async function getPackageDetails(id: string) {
  return prisma.package.findUnique({
    where: { id },
    include: {
      ...packageInclude,
      history: {
        include: {
          actor: true
        },
        orderBy: { createdAt: "desc" }
      }
    }
  });
}

export async function getResidentPackageDetails(id: string, residentId: string) {
  return prisma.package.findFirst({
    where: {
      id,
      residentId
    },
    include: {
      ...packageInclude,
      history: {
        include: {
          actor: true
        },
        orderBy: { createdAt: "desc" }
      }
    }
  });
}

export async function getResidents(includeInactive = false) {
  return prisma.user.findMany({
    where: {
      role: "RESIDENT",
      ...(includeInactive ? {} : { isActive: true })
    },
    include: {
      unit: {
        include: {
          tower: true
        }
      },
      residentPackages: {
        orderBy: { receivedAt: "desc" },
        take: 3
      }
    },
    orderBy: [{ isActive: "desc" }, { name: "asc" }]
  });
}

export async function getResidentById(id: string) {
  return prisma.user.findFirst({
    where: {
      id,
      role: "RESIDENT"
    },
    include: {
      unit: {
        include: {
          tower: true
        }
      },
      residentPackages: {
        orderBy: { receivedAt: "desc" },
        take: 8,
        include: {
          unit: true
        }
      }
    }
  });
}

export async function getUnits() {
  return prisma.unit.findMany({
    include: {
      tower: true
    },
    orderBy: [{ tower: { name: "asc" } }, { number: "asc" }]
  });
}

export async function getResidentDashboardData(residentId: string) {
  const packages = await prisma.package.findMany({
    where: {
      residentId
    },
    include: packageInclude,
    orderBy: { receivedAt: "desc" }
  });

  return {
    metrics: summarizePackages(packages),
    packages,
    nextPickup:
      packages.find(
        (pkg) =>
          pkg.status === PackageStatus.TOKEN_GENERATED || pkg.status === PackageStatus.NOTIFIED
      ) ?? null
  };
}

export async function getResidentPackages(residentId: string) {
  return prisma.package.findMany({
    where: {
      residentId
    },
    include: packageInclude,
    orderBy: { receivedAt: "desc" }
  });
}

export async function getHistoryFeed() {
  return prisma.packageHistory.findMany({
    include: {
      actor: true,
      package: {
        include: {
          resident: true,
          unit: true
        }
      }
    },
    orderBy: { createdAt: "desc" }
  });
}

export async function getAuditLogs(limit = 20) {
  return prisma.auditLog.findMany({
    include: {
      actor: true
    },
    orderBy: { createdAt: "desc" },
    take: limit
  });
}

export async function getNotificationDeliveryFeed(limit = 20) {
  return prisma.notificationDelivery.findMany({
    include: {
      notification: {
        include: {
          user: true
        }
      }
    },
    orderBy: [{ attemptedAt: "desc" }, { createdAt: "desc" }],
    take: limit
  });
}

export async function getNotificationDeliveryStats() {
  const deliveries = await prisma.notificationDelivery.findMany({
    select: {
      status: true
    }
  });

  return deliveries.reduce<Record<DeliveryStatus | "TOTAL", number>>(
    (accumulator, delivery) => {
      accumulator.TOTAL += 1;
      accumulator[delivery.status] += 1;
      return accumulator;
    },
    {
      TOTAL: 0,
      PENDING: 0,
      SENT: 0,
      SKIPPED: 0,
      FAILED: 0
    }
  );
}
