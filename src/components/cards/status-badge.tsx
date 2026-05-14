import type { Package, PackageStatus } from "@/lib/prisma";

import { Badge } from "@/components/ui/badge";
import { getPresentationStatus } from "@/lib/packages";

type PackageState = Pick<Package, "status" | "dueAt">;

export function StatusBadge({ packageState }: { packageState: PackageState }) {
  const status = getPresentationStatus(packageState);

  return <Badge tone={status.tone}>{status.label}</Badge>;
}
