import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/ui/card";

export function StatCard({
  label,
  value,
  hint
}: {
  label: string;
  value: number | string;
  hint: string;
}) {
  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.18em] text-white/45">{label}</span>
        <ArrowUpRight className="h-4 w-4 text-[var(--brand)]" />
      </div>
      <div className="space-y-2">
        <p className="panel-title text-4xl font-bold">{value}</p>
        <p className="text-sm text-[var(--text-muted)]">{hint}</p>
      </div>
    </Card>
  );
}
