import Link from "next/link";
import { ArrowRight, QrCode, Sparkles } from "lucide-react";

import { StatCard } from "@/components/cards/stat-card";
import { StatusBadge } from "@/components/cards/status-badge";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getPorterDashboardData } from "@/lib/queries";
import { formatDateTime, formatRelative } from "@/lib/utils";

export default async function PorterDashboardPage() {
  const { metrics, recentPackages, recentHistory } = await getPorterDashboardData();

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Operação da portaria"
        title="Painel do Porteiro"
        description="Acompanhe recebimentos, retiradas, pendências e validações em um fluxo digital único."
        actions={
          <>
            <Button asChild>
              <Link href="/porteiro/encomendas/nova">Cadastrar nova encomenda</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/porteiro/retirada">Validar token</Link>
            </Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total em fluxo" value={metrics.total} hint="Base consolidada de encomendas rastreadas." />
        <StatCard label="Retiradas" value={metrics.pickedUp} hint="Encomendas concluídas com validação registrada." />
        <StatCard label="Atrasadas" value={metrics.overdue} hint="Pedidos que ultrapassaram a janela de retirada." />
        <StatCard label="Prontas com token" value={metrics.readyWithToken} hint="Fila pronta para validação na portaria." />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Atividade recente</p>
              <h2 className="panel-title mt-2 text-2xl font-bold">Encomendas mais recentes</h2>
            </div>
            <Button variant="secondary" asChild>
              <Link href="/porteiro/encomendas">
                Ver tudo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="data-table min-w-full text-left text-sm">
              <thead>
                <tr>
                  <th className="pb-4">Código</th>
                  <th className="pb-4">Morador</th>
                  <th className="pb-4">Unidade</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4 text-right">Ação</th>
                </tr>
              </thead>
              <tbody>
                {recentPackages.map((pkg) => (
                  <tr key={pkg.id}>
                    <td className="py-4 font-semibold text-white">{pkg.trackingCode}</td>
                    <td className="py-4 text-[var(--text-muted)]">{pkg.resident.name}</td>
                    <td className="py-4 text-[var(--text-muted)]">{pkg.unit.label}</td>
                    <td className="py-4">
                      <StatusBadge packageState={pkg} />
                    </td>
                    <td className="py-4 text-right">
                      <Link href={`/porteiro/encomendas/${pkg.id}`} className="text-[var(--brand)]">
                        Abrir
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="space-y-6">
          <div className="rounded-[28px] border border-[var(--border-strong)] bg-[rgba(107,254,156,0.08)] p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[rgba(107,254,156,0.14)] p-3">
                <QrCode className="h-6 w-6 text-[var(--brand)]" />
              </div>
              <div>
                <p className="panel-title text-xl font-bold">Fila de validação ativa</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Tokens gerados liberam uma retirada rápida e rastreável.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[var(--brand)]" />
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Timeline operacional</p>
            </div>
            <div className="mt-5 space-y-4">
              {recentHistory.map((entry) => (
                <div key={entry.id} className="rounded-[24px] border border-white/8 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">{entry.note}</p>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-white/35">
                    <span>{entry.package.trackingCode}</span>
                    <span>{entry.actor?.name ?? "Sistema"}</span>
                    <span>{formatRelative(entry.createdAt)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <Card className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Janela de operação</p>
          <h2 className="panel-title mt-2 text-2xl font-bold">Resumo do turno</h2>
          <p className="mt-2 max-w-2xl text-sm text-[var(--text-muted)]">
            O ambiente acompanha o ciclo completo de cada encomenda, desde o registro até a retirada com token único.
            Última atualização: {formatDateTime(new Date())}.
          </p>
        </div>
        <Button variant="secondary" asChild>
          <Link href="/porteiro/historico">Abrir histórico completo</Link>
        </Button>
      </Card>
    </div>
  );
}
