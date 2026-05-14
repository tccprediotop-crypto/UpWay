import { Bell, Building2, ShieldCheck } from "lucide-react";

import { LogoutButton } from "@/components/logout-button";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { LogoMark } from "@/components/layout/logo-mark";
import { Badge } from "@/components/ui/badge";
import type { NavItem } from "@/lib/constants";
import { formatRelative } from "@/lib/utils";

type NotificationPreview = {
  id: string;
  title: string;
  message: string;
  createdAt: Date;
};

export function AppShell({
  userName,
  roleLabel,
  propertyLabel,
  navItems,
  notifications,
  children
}: {
  userName: string;
  roleLabel: string;
  propertyLabel: string;
  navItems: NavItem[];
  notifications: NotificationPreview[];
  children: React.ReactNode;
}) {
  return (
    <div className="app-shell min-h-screen">
      <div className="bg-grid" />
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-6 px-4 py-4 lg:px-6">
        <aside className="glass-card hidden w-80 shrink-0 rounded-[32px] p-6 lg:flex lg:flex-col">
          <LogoMark />
          <div className="mt-8 flex items-center gap-3 rounded-[24px] border border-white/10 bg-white/5 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <ShieldCheck className="h-5 w-5 text-[var(--brand)]" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-white">{userName}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-white/45">{roleLabel}</p>
            </div>
          </div>

          <div className="mt-8">
            <SidebarNav items={navItems} />
          </div>

          <div className="mt-auto space-y-4">
            <div className="rounded-[24px] border border-[var(--border-strong)] bg-[rgba(107,254,156,0.08)] p-4">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-[var(--brand)]" />
                <div>
                  <p className="text-sm font-semibold text-white">{propertyLabel}</p>
                  <p className="text-xs text-white/55">Operação monitorada em tempo real</p>
                </div>
              </div>
            </div>
            <LogoutButton />
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col gap-6 pb-10">
          <div className="glass-card flex flex-col gap-4 rounded-[30px] px-5 py-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Sistema Online</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Acesso seguro e histórico rastreável em uma única operação.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="success">Portaria em operação</Badge>
              <Badge tone="muted">{propertyLabel}</Badge>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
            <main className="min-w-0 space-y-6">{children}</main>

            <aside className="space-y-6">
              <section className="glass-card rounded-[30px] p-6">
                <div className="flex items-center justify-between">
                  <h2 className="panel-title text-xl font-bold">Central de Avisos</h2>
                  <Bell className="h-5 w-5 text-[var(--brand)]" />
                </div>
                <div className="mt-5 space-y-4">
                  {notifications.length === 0 ? (
                    <p className="text-sm text-[var(--text-muted)]">Sem novos avisos neste momento.</p>
                  ) : (
                    notifications.map((notification) => (
                      <div key={notification.id} className="rounded-[24px] border border-white/8 bg-white/5 p-4">
                        <p className="text-sm font-semibold text-white">{notification.title}</p>
                        <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">
                          {notification.message}
                        </p>
                        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/35">
                          {formatRelative(notification.createdAt)}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </section>

              <section className="glass-card rounded-[30px] p-6 lg:hidden">
                <SidebarNav items={navItems} />
                <div className="mt-4">
                  <LogoutButton />
                </div>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
