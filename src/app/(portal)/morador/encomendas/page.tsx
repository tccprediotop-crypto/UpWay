import Link from "next/link";
import { Role } from "@/lib/prisma";

import { StatusBadge } from "@/components/cards/status-badge";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { requireRole } from "@/lib/auth/session";
import { getResidentPackages } from "@/lib/queries";
import { formatDateTime } from "@/lib/utils";

export default async function ResidentPackagesPage() {
  const session = await requireRole(Role.RESIDENT);
  const packages = await getResidentPackages(session.user.id);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Meu fluxo"
        title="Minhas encomendas"
        description="Acompanhe o histórico de entregas, o status atual e a disponibilidade do token de retirada."
      />

      {packages.length === 0 ? (
        <EmptyState
          title="Nenhuma encomenda vinculada"
          description="Quando a portaria registrar uma nova entrega para sua unidade, ela aparecerá aqui."
        />
      ) : (
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="data-table min-w-full text-left text-sm">
              <thead>
                <tr>
                  <th className="pb-4">Recebimento</th>
                  <th className="pb-4">Código</th>
                  <th className="pb-4">Transportadora</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4 text-right">Ação</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg) => (
                  <tr key={pkg.id}>
                    <td className="py-4 text-[var(--text-muted)]">{formatDateTime(pkg.receivedAt)}</td>
                    <td className="py-4 font-semibold text-white">{pkg.trackingCode}</td>
                    <td className="py-4 text-[var(--text-muted)]">{pkg.carrier}</td>
                    <td className="py-4">
                      <StatusBadge packageState={pkg} />
                    </td>
                    <td className="py-4 text-right">
                      <Link href={`/morador/encomendas/${pkg.id}`} className="text-[var(--brand)]">
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
