import { Inbox } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function EmptyState({
  title,
  description,
  actionHref,
  actionLabel
}: {
  title: string;
  description: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <Card className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <div className="status-ring rounded-full border border-white/10 bg-white/5 p-5">
        <Inbox className="h-8 w-8 text-white/70" />
      </div>
      <div className="max-w-md space-y-2">
        <h3 className="panel-title text-2xl font-bold">{title}</h3>
        <p className="text-sm text-[var(--text-muted)]">{description}</p>
      </div>
      {actionHref && actionLabel ? (
        <Button asChild>
          <a href={actionHref}>{actionLabel}</a>
        </Button>
      ) : null}
    </Card>
  );
}
