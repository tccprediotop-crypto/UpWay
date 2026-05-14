import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getHistoryFeed } from "@/lib/queries";
import { formatDateTime } from "@/lib/utils";

export default async function PorterHistoryPage() {
  const entries = await getHistoryFeed();

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Rastreabilidade"
        title="Histórico operacional"
        description="Cada etapa do processo fica registrada com ator, data e contexto da movimentação."
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
            <div>
              <p className="text-lg font-semibold text-white">{entry.package.trackingCode}</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {entry.package.resident.name} • {entry.package.unit.label}
              </p>
            </div>
            <p className="text-sm leading-7 text-white/80">{entry.note}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-white/35">
              {entry.actor?.name ?? "Sistema"}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
