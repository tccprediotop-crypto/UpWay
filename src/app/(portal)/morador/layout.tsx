import { Role } from "@/lib/prisma";

import { AppShell } from "@/components/layout/app-shell";
import { residentNav } from "@/lib/constants";
import { getNotifications, getResidentPropertyLabel } from "@/lib/queries";
import { requireRole } from "@/lib/auth/session";

export default async function ResidentLayout({ children }: { children: React.ReactNode }) {
  const session = await requireRole(Role.RESIDENT);
  const [notifications, propertyLabel] = await Promise.all([
    getNotifications(session.user.id),
    getResidentPropertyLabel(session.user.unitId)
  ]);

  return (
    <AppShell
      userName={session.user.name ?? "Morador"}
      roleLabel="Morador"
      propertyLabel={propertyLabel}
      navItems={residentNav}
      notifications={notifications}
    >
      {children}
    </AppShell>
  );
}
