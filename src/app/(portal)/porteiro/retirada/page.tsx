import Link from "next/link";

import { StatusBadge } from "@/components/cards/status-badge";
import { TokenValidationForm } from "@/components/forms/token-validation-form";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { getPorterPackages } from "@/lib/queries";
import { formatDateTime } from "@/lib/utils";

export default async function PorterPickupPage() {
  const packages = await getPorterPackages();
  const queue = packages.filter((pkg) => pkg.status === "TOKEN_GENERATED");

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Validacao"
        title="Retirada com token"
        description="Valide a retirada por QR na camera ou use o token manualmente como fallback operacional."
      />

      <Card className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Scanner e fallback</p>
          <h2 className="panel-title mt-2 text-2xl font-bold">Validacao operacional</h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            O porteiro pode ler o QR do celular do morador pela camera ou digitar o token e o codigo da encomenda quando precisar.
          </p>
        </div>
        <TokenValidationForm />
      </Card>

      {queue.length === 0 ? (
        <EmptyState
          title="Nenhuma retirada aguardando validacao"
          description="Assim que um morador gerar um token, a fila operacional aparecera aqui."
          actionHref="/porteiro/encomendas"
          actionLabel="Voltar para encomendas"
        />
      ) : (
        <Card className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Fila ativa</p>
              <h2 className="panel-title mt-2 text-2xl font-bold">Encomendas prontas para retirada</h2>
            </div>
            <Button variant="secondary" asChild>
              <Link href="/porteiro/encomendas">Abrir catalogo completo</Link>
            </Button>
          </div>

          <div className="grid gap-4">
            {queue.map((pkg) => (
              <div key={pkg.id} className="rounded-[24px] border border-white/8 bg-white/5 p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="panel-title text-xl font-bold">{pkg.trackingCode}</p>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      {pkg.resident.name} • {pkg.unit.label}
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      Token gerado em {pkg.token ? formatDateTime(pkg.token.generatedAt) : "momento nao disponivel"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusBadge packageState={pkg} />
                    <Link href={`/porteiro/encomendas/${pkg.id}`} className="text-sm text-[var(--brand)]">
                      Ver detalhes
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
