import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock3, QrCode, UserRound } from "lucide-react";

import { StatusBadge } from "@/components/cards/status-badge";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getPackageDetails } from "@/lib/queries";
import { formatDateTime } from "@/lib/utils";

type Params = Promise<{
  id: string;
}>;

export default async function PackageDetailsPage({ params }: { params: Params }) {
  const { id } = await params;
  const pkg = await getPackageDetails(id);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Detalhe da encomenda"
        title={pkg.trackingCode}
        description={`${pkg.resident.name} • ${pkg.unit.label} • ${pkg.carrier}`}
        actions={
          <>
            <StatusBadge packageState={pkg} />
            <Button variant="secondary" asChild>
              <Link href="/porteiro/encomendas">Voltar</Link>
            </Button>
          </>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <Card className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] border border-white/8 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">Morador</p>
              <p className="mt-3 text-lg font-semibold text-white">{pkg.resident.name}</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{pkg.unit.label}</p>
            </div>
            <div className="rounded-[24px] border border-white/8 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">Recebida por</p>
              <p className="mt-3 text-lg font-semibold text-white">{pkg.receivedBy.name}</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{formatDateTime(pkg.receivedAt)}</p>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/8 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Descrição</p>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              {pkg.description || "Sem observações adicionais para esta encomenda."}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[var(--brand)]" />
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand)]">Linha do tempo</p>
            </div>
            <div className="mt-5 space-y-4">
              {pkg.history.map((entry) => (
                <div key={entry.id} className="rounded-[24px] border border-white/8 bg-white/5 p-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge tone="muted">{entry.type}</Badge>
                    <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                      {formatDateTime(entry.createdAt)}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/85">{entry.note}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/35">
                    {entry.actor?.name ?? "Sistema"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/6 p-3">
                <QrCode className="h-5 w-5 text-[var(--brand)]" />
              </div>
              <div>
                <p className="panel-title text-xl font-bold">Token de retirada</p>
                <p className="text-sm text-[var(--text-muted)]">Validação exibida pelo morador no momento da retirada.</p>
              </div>
            </div>

            {pkg.token ? (
              <div className="space-y-3 rounded-[24px] border border-[var(--border-strong)] bg-[rgba(107,254,156,0.08)] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand)]">Token ativo</p>
                <p className="panel-title text-2xl font-bold">{pkg.token.code}</p>
                <p className="text-sm text-[var(--text-muted)]">
                  Expira em {formatDateTime(pkg.token.expiresAt)}.
                </p>
              </div>
            ) : (
              <div className="rounded-[24px] border border-white/8 bg-white/5 p-5 text-sm text-[var(--text-muted)]">
                O morador ainda não gerou um token para esta encomenda.
              </div>
            )}
          </Card>

          <Card className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/6 p-3">
                <UserRound className="h-5 w-5 text-[var(--brand)]" />
              </div>
              <div>
                <p className="panel-title text-xl font-bold">Contato do morador</p>
                <p className="text-sm text-[var(--text-muted)]">Dados para conferência rápida na portaria.</p>
              </div>
            </div>
            <div className="rounded-[24px] border border-white/8 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">{pkg.resident.name}</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{pkg.resident.email}</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{pkg.resident.phone ?? "Telefone não informado"}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
