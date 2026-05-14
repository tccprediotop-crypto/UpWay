import { BellRing, CheckCircle2, CircleAlert, ShieldCheck, TimerReset, Users } from "lucide-react";

import { NewPorterForm } from "@/components/forms/new-porter-form";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import {
  getAuditLogs,
  getNotificationDeliveryFeed,
  getNotificationDeliveryStats,
  getOperationalUsers
} from "@/lib/queries";
import { formatDateTime } from "@/lib/utils";

type SearchParams = Promise<{
  error?: string;
  status?: string;
}>;

const statusMessages: Record<string, string> = {
  "porter-created": "A nova conta operacional foi criada com sucesso."
};

const statusTone = {
  SENT: "success",
  FAILED: "warning",
  SKIPPED: "muted",
  PENDING: "brand"
} as const;

export default async function SettingsPage({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const [auditLogs, deliveries, deliveryStats, operationalUsers] = await Promise.all([
    getAuditLogs(12),
    getNotificationDeliveryFeed(12),
    getNotificationDeliveryStats(),
    getOperationalUsers()
  ]);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Governanca"
        title="Configuracoes operacionais"
        description="Gerencie a equipe de portaria, acompanhe a saude das notificacoes e mantenha a trilha administrativa do sistema."
      />

      {params.error ? (
        <Card className="border-rose-300/16 bg-rose-300/10">
          <div className="flex items-start gap-3">
            <CircleAlert className="mt-0.5 h-5 w-5 text-rose-200" />
            <div>
              <p className="text-sm font-semibold text-white">Nao foi possivel concluir a operacao</p>
              <p className="mt-1 text-sm text-white/75">{params.error}</p>
            </div>
          </div>
        </Card>
      ) : null}

      {params.status && statusMessages[params.status] ? (
        <Card className="border-emerald-300/16 bg-emerald-300/10">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-200" />
            <div>
              <p className="text-sm font-semibold text-white">Operacao concluida</p>
              <p className="mt-1 text-sm text-white/75">{statusMessages[params.status]}</p>
            </div>
          </div>
        </Card>
      ) : null}

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="space-y-4">
          <ShieldCheck className="h-6 w-6 text-[var(--brand)]" />
          <h2 className="panel-title text-2xl font-bold">Acesso operacional</h2>
          <p className="text-sm leading-7 text-[var(--text-muted)]">
            O ambiente depende apenas de contas reais salvas no banco. Hoje existem{" "}
            <strong className="text-white">{operationalUsers.length}</strong> acessos ativos de portaria.
          </p>
        </Card>

        <Card className="space-y-4">
          <TimerReset className="h-6 w-6 text-[var(--brand)]" />
          <h2 className="panel-title text-2xl font-bold">SLA de retirada</h2>
          <p className="text-sm leading-7 text-[var(--text-muted)]">
            O prazo padrao continua em 3 dias antes de sinalizar atraso no fluxo do morador e da portaria.
          </p>
        </Card>

        <Card className="space-y-4">
          <Users className="h-6 w-6 text-[var(--brand)]" />
          <h2 className="panel-title text-2xl font-bold">Notificacoes</h2>
          <p className="text-sm leading-7 text-[var(--text-muted)]">
            {deliveryStats.SENT} envios concluidos, {deliveryStats.FAILED} falhas e {deliveryStats.SKIPPED} canais ignorados por falta de configuracao ou cadastro.
          </p>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <Card className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Equipe</p>
            <h2 className="panel-title mt-2 text-2xl font-bold">Criar nova conta de porteiro</h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Use este cadastro para ampliar a equipe operacional sem depender de credenciais fixas ou contas publicas.
            </p>
          </div>
          <NewPorterForm />
        </Card>

        <Card className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Contas ativas</p>
              <h2 className="panel-title mt-2 text-2xl font-bold">Equipe operacional</h2>
            </div>
            <Badge tone="brand">{operationalUsers.length} usuarios</Badge>
          </div>

          <div className="space-y-4">
            {operationalUsers.map((user) => (
              <div key={user.id} className="rounded-[24px] border border-white/8 bg-white/5 p-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge tone={user.role === "ADMIN" ? "brand" : "neutral"}>{user.role}</Badge>
                  {user.jobTitle ? <Badge tone="muted">{user.jobTitle}</Badge> : null}
                </div>
                <p className="mt-3 text-sm font-semibold text-white">{user.name}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{user.email}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{user.phone ?? "Telefone nao informado"}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/40">
                  Ultimo acesso: {user.lastLoginAt ? formatDateTime(user.lastLoginAt) : "ainda nao acessou"}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <Card className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Trilha administrativa</p>
              <h2 className="panel-title mt-2 text-2xl font-bold">Auditoria recente</h2>
            </div>
            <Badge tone="brand">{auditLogs.length} eventos</Badge>
          </div>

          <div className="space-y-4">
            {auditLogs.map((entry) => (
              <div key={entry.id} className="rounded-[24px] border border-white/8 bg-white/5 p-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge tone="neutral">{entry.entityType}</Badge>
                  <Badge tone="muted">{entry.action}</Badge>
                </div>
                <p className="mt-3 text-sm font-semibold text-white">{entry.description}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/40">
                  {entry.actor?.name ?? "Sistema"} • {formatDateTime(entry.createdAt)}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Entregas de aviso</p>
              <h2 className="panel-title mt-2 text-2xl font-bold">Feed de notificacoes</h2>
            </div>
            <BellRing className="h-5 w-5 text-[var(--brand)]" />
          </div>

          <div className="space-y-4">
            {deliveries.map((delivery) => (
              <div key={delivery.id} className="rounded-[24px] border border-white/8 bg-white/5 p-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge tone={statusTone[delivery.status]}>{delivery.status}</Badge>
                  <Badge tone="neutral">{delivery.channel}</Badge>
                </div>
                <p className="mt-3 text-sm font-semibold text-white">{delivery.notification.title}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{delivery.notification.user.name}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {delivery.errorMessage ?? delivery.recipient ?? "Canal interno do aplicativo"}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/40">
                  {formatDateTime(delivery.attemptedAt ?? delivery.createdAt)}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
