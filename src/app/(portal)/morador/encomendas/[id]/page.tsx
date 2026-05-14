import Link from "next/link";
import { Role } from "@/lib/prisma";
import { notFound } from "next/navigation";

import { generatePickupTokenAction } from "@/actions/packages";
import { StatusBadge } from "@/components/cards/status-badge";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { requireRole } from "@/lib/auth/session";
import { getResidentPackageDetails } from "@/lib/queries";
import { formatDateTime } from "@/lib/utils";

type Params = Promise<{
  id: string;
}>;

export default async function ResidentPackageDetailsPage({ params }: { params: Params }) {
  const session = await requireRole(Role.RESIDENT);
  const { id } = await params;
  const pkg = await getResidentPackageDetails(id, session.user.id);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Minha encomenda"
        title={pkg.trackingCode}
        description={`${pkg.carrier} • recebida em ${formatDateTime(pkg.receivedAt)}`}
        actions={
          <>
            <StatusBadge packageState={pkg} />
            <Button variant="secondary" asChild>
              <Link href="/morador/encomendas">Voltar</Link>
            </Button>
          </>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_0.85fr]">
        <Card className="space-y-6">
          <div className="rounded-[24px] border border-white/8 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Descrição</p>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              {pkg.description || "A portaria não adicionou observações específicas para esta entrega."}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Histórico da movimentação</p>
            <div className="mt-5 space-y-4">
              {pkg.history.map((entry) => (
                <div key={entry.id} className="rounded-[24px] border border-white/8 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">{entry.note}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/35">
                    {formatDateTime(entry.createdAt)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="space-y-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Retirada</p>
            <h2 className="panel-title mt-2 text-2xl font-bold">Token único</h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Gere seu token apenas quando estiver próximo da portaria. Ele é a confirmação digital da retirada.
            </p>
          </div>

          {pkg.token ? (
            <div className="space-y-4 rounded-[24px] border border-[var(--border-strong)] bg-[rgba(107,254,156,0.08)] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand)]">Token ativo</p>
              <p className="panel-title text-2xl font-bold">{pkg.token.code}</p>
              <Button asChild>
                <Link href={`/morador/token/${pkg.id}`}>Abrir token</Link>
              </Button>
            </div>
          ) : (
            <form action={generatePickupTokenAction} className="space-y-4 rounded-[24px] border border-white/8 bg-white/5 p-5">
              <input type="hidden" name="packageId" value={pkg.id} />
              <p className="text-sm text-[var(--text-muted)]">
                O token é válido por 24 horas e pode ser apresentado diretamente ao porteiro.
              </p>
              <Button type="submit">Gerar token de retirada</Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}
