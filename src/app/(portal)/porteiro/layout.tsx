import { Role } from "@/lib/prisma";

import { AppShell } from "@/components/layout/app-shell";
import { porterNav } from "@/lib/constants";
import { getNotifications, getOperationalPropertyLabel } from "@/lib/queries";
import { requireRole } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

export default async function PorterLayout({ children }: { children: React.ReactNode }) {
  const session = await requireRole(Role.PORTER);
  const [notifications, propertyLabel] = await Promise.all([
    getNotifications(session.user.id),
    getOperationalPropertyLabel()
  ]);

  return (
    <AppShell
      userName={session.user.name ?? "Equipe UpWay"}
      roleLabel={session.user.role === Role.ADMIN ? "Administrador" : "Porteiro"}
      propertyLabel={propertyLabel}
      navItems={porterNav}
      notifications={notifications}
    >
      {children}
    </AppShell>
  );
}
