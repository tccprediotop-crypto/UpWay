import { Role } from "@/lib/prisma";

import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { requireRole } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { formatDateTime } from "@/lib/utils";

export default async function ResidentHistoryPage() {
  const session = await requireRole(Role.RESIDENT);
  const entries = await prisma.packageHistory.findMany({
    where: {
      package: {
        residentId: session.user.id
      }
    },
    include: {
      package: true
    },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Minha rastreabilidade"
        title="Histórico"
        description="Revise todo o caminho das suas encomendas, desde o recebimento até a retirada."
      />

      <div className="grid gap-4">
        {entries.map((entry) => (
          <Card key={entry.id} className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="muted">{entry.type}</Badge>
              <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                {formatDateTime(entry.createdAt)}
              </span>
            </div>
            <p className="text-lg font-semibold text-white">{entry.package.trackingCode}</p>
            <p className="text-sm leading-7 text-[var(--text-muted)]">{entry.note}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
