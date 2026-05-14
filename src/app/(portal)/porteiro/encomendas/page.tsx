import Link from "next/link";
import { Search } from "lucide-react";

import { StatusBadge } from "@/components/cards/status-badge";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Input } from "@/components/ui/input";
import { getPorterPackages } from "@/lib/queries";
import { formatDateTime } from "@/lib/utils";

type SearchParams = Promise<{
  q?: string;
}>;

export default async function PorterPackagesPage({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";
  const packages = await getPorterPackages(query);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Operação"
        title="Encomendas"
        description="Busque por morador, unidade, transportadora ou código para navegar pelo fluxo completo."
        actions={
          <Button asChild>
            <Link href="/porteiro/encomendas/nova">Nova encomenda</Link>
          </Button>
        }
      />

      <Card>
        <form className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
            <Input
              name="q"
              defaultValue={query}
              className="pl-11"
              placeholder="Buscar por código, morador, unidade ou transportadora"
            />
          </div>
          <Button type="submit" variant="secondary">
            Filtrar
          </Button>
        </form>
      </Card>

      {packages.length === 0 ? (
        <EmptyState
          title="Nenhuma encomenda encontrada"
          description="Ajuste o filtro ou cadastre uma nova encomenda para começar a operação."
          actionHref="/porteiro/encomendas/nova"
          actionLabel="Cadastrar encomenda"
        />
      ) : (
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="data-table min-w-full text-left text-sm">
              <thead>
                <tr>
                  <th className="pb-4">Recebimento</th>
                  <th className="pb-4">Código</th>
                  <th className="pb-4">Morador</th>
                  <th className="pb-4">Unidade</th>
                  <th className="pb-4">Transportadora</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4 text-right">Detalhes</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg) => (
                  <tr key={pkg.id}>
                    <td className="py-4 text-[var(--text-muted)]">{formatDateTime(pkg.receivedAt)}</td>
                    <td className="py-4 font-semibold text-white">{pkg.trackingCode}</td>
                    <td className="py-4 text-[var(--text-muted)]">{pkg.resident.name}</td>
                    <td className="py-4 text-[var(--text-muted)]">{pkg.unit.label}</td>
                    <td className="py-4 text-[var(--text-muted)]">{pkg.carrier}</td>
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
      )}
    </div>
  );
}
