import { PackageStatus, type Package } from "@/lib/prisma";
import { addHours } from "date-fns";

import { isOverdue } from "@/lib/utils";

export function buildPickupCode(packageCode: string, residentName: string) {
  const compactName = residentName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")[0]
    .toUpperCase();
  const normalizedCode = packageCode.toUpperCase().replace(/[^A-Z0-9]/g, "");

  return `UPWAY-${compactName}-${normalizedCode}`;
}

export function tokenExpiry(baseDate = new Date()) {
  return addHours(baseDate, 24);
}

export function getPresentationStatus(pkg: Pick<Package, "status" | "dueAt">) {
  if (pkg.status !== PackageStatus.PICKED_UP && isOverdue(pkg.dueAt)) {
    return {
      label: "Atrasada",
      tone: "warning" as const
    };
  }

  const statuses = {
    [PackageStatus.RECEIVED]: {
      label: "Recebida",
      tone: "neutral" as const
    },
    [PackageStatus.NOTIFIED]: {
      label: "Notificado",
      tone: "success" as const
    },
    [PackageStatus.TOKEN_GENERATED]: {
      label: "Token gerado",
      tone: "brand" as const
    },
    [PackageStatus.PICKED_UP]: {
      label: "Retirada",
      tone: "muted" as const
    }
  };

  return statuses[pkg.status];
}

export function summarizePackages<T extends Pick<Package, "status" | "dueAt">>(packages: T[]) {
  return packages.reduce(
    (accumulator, pkg) => {
      accumulator.total += 1;

      if (pkg.status === PackageStatus.PICKED_UP) {
        accumulator.pickedUp += 1;
      } else {
        accumulator.pending += 1;
      }

      if (isOverdue(pkg.dueAt) && pkg.status !== PackageStatus.PICKED_UP) {
        accumulator.overdue += 1;
      }

      if (pkg.status === PackageStatus.NOTIFIED) {
        accumulator.notified += 1;
      }

      if (pkg.status === PackageStatus.TOKEN_GENERATED) {
        accumulator.readyWithToken += 1;
      }

      return accumulator;
    },
    {
      total: 0,
      pending: 0,
      pickedUp: 0,
      overdue: 0,
      notified: 0,
      readyWithToken: 0
    }
  );
}
