import Link from "next/link";

import { Role } from "@/lib/prisma";

import { generatePickupTokenAction } from "@/actions/packages";
import { StatCard } from "@/components/cards/stat-card";
import { StatusBadge } from "@/components/cards/status-badge";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { requireRole } from "@/lib/auth/session";
import { getResidentDashboardData } from "@/lib/queries";
import { formatDateTime } from "@/lib/utils";

export default async function ResidentDashboardPage() {
  const session = await requireRole(Role.RESIDENT);
  const { metrics, packages, nextPickup } = await getResidentDashboardData(session.user.id);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Meu painel"
        title={`Ola, ${session.user.name?.split(" ")[0]}`}
        description="Acompanhe as entregas recebidas, gere seu token e consulte o historico sem depender da portaria."
      />

      {session.user.mustChangePassword ? (
        <Card className="border-amber-300/16 bg-amber-300/10">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Troque sua senha provisoria</p>
              <p className="mt-1 text-sm text-white/75">
                Seu acesso ja esta ativo, mas ainda usa a senha inicial informada pela portaria.
              </p>
            </div>
            <Button asChild>
              <Link href="/morador/perfil">Atualizar senha agora</Link>
            </Button>
          </div>
        </Card>
      ) : null}

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Pendentes" value={metrics.pending} hint="Encomendas aguardando retirada." />
        <StatCard label="Retiradas" value={metrics.pickedUp} hint="Historico concluido com sucesso." />
        <StatCard label="Atrasadas" value={metrics.overdue} hint="Retire o quanto antes para evitar acumulo." />
      </div>

      {nextPickup ? (
        <Card className="space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Proxima retirada</p>
              <h2 className="panel-title mt-2 text-3xl font-bold">{nextPickup.trackingCode}</h2>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Recebida em {formatDateTime(nextPickup.receivedAt)} • {nextPickup.unit.label}
              </p>
            </div>
            <StatusBadge packageState={nextPickup} />
          </div>

          <div className="flex flex-wrap gap-3">
            {nextPickup.token ? (
              <Button asChild>
                <Link href={`/morador/token/${nextPickup.id}`}>Abrir token ativo</Link>
              </Button>
            ) : (
              <form action={generatePickupTokenAction}>
                <input type="hidden" name="packageId" value={nextPickup.id} />
                <Button type="submit">Gerar token agora</Button>
              </form>
            )}
            <Button variant="secondary" asChild>
              <Link href={`/morador/encomendas/${nextPickup.id}`}>Ver detalhes</Link>
            </Button>
          </div>
        </Card>
      ) : null}

      <Card className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Minhas encomendas</p>
            <h2 className="panel-title mt-2 text-2xl font-bold">Visao rapida</h2>
          </div>
          <Button variant="secondary" asChild>
            <Link href="/morador/encomendas">Ver todas</Link>
          </Button>
        </div>

        <div className="grid gap-4">
          {packages.slice(0, 4).map((pkg) => (
            <div key={pkg.id} className="rounded-[24px] border border-white/8 bg-white/5 p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">{pkg.trackingCode}</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {pkg.carrier} • {formatDateTime(pkg.receivedAt)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge packageState={pkg} />
                  <Link href={`/morador/encomendas/${pkg.id}`} className="text-sm text-[var(--brand)]">
                    Abrir
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
