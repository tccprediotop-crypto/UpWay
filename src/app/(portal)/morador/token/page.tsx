import Link from "next/link";
import { Role } from "@/lib/prisma";

import { generatePickupTokenAction } from "@/actions/packages";
import { StatusBadge } from "@/components/cards/status-badge";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { requireRole } from "@/lib/auth/session";
import { getResidentPackages } from "@/lib/queries";
import { formatDateTime } from "@/lib/utils";

export default async function ResidentTokensPage() {
  const session = await requireRole(Role.RESIDENT);
  const packages = await getResidentPackages(session.user.id);
  const pending = packages.filter((pkg) => pkg.status !== "PICKED_UP");

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Retirada digital"
        title="Meus tokens"
        description="Centralize os tokens ativos e gere novos acessos para as encomendas pendentes."
      />

      {pending.length === 0 ? (
        <EmptyState
          title="Nenhum token necessário no momento"
          description="Quando houver uma encomenda pendente, você poderá gerar e acompanhar o token aqui."
        />
      ) : (
        <div className="grid gap-4">
          {pending.map((pkg) => (
            <Card key={pkg.id} className="space-y-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">{pkg.trackingCode}</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {pkg.carrier} • {formatDateTime(pkg.receivedAt)}
                  </p>
                </div>
                <StatusBadge packageState={pkg} />
              </div>

              <div className="flex flex-wrap gap-3">
                {pkg.token ? (
                  <Button asChild>
                    <Link href={`/morador/token/${pkg.id}`}>Abrir token ativo</Link>
                  </Button>
                ) : (
                  <form action={generatePickupTokenAction}>
                    <input type="hidden" name="packageId" value={pkg.id} />
                    <Button type="submit">Gerar token</Button>
                  </form>
                )}
                <Button variant="secondary" asChild>
                  <Link href={`/morador/encomendas/${pkg.id}`}>Detalhes</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
