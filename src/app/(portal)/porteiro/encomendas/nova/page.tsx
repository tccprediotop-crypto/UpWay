import Link from "next/link";
import { AlertTriangle } from "lucide-react";

import { NewPackageForm } from "@/components/forms/new-package-form";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getResidents } from "@/lib/queries";

type SearchParams = Promise<{
  error?: string;
}>;

export default async function NewPackagePage({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const residents = await getResidents();

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Cadastro operacional"
        title="Nova encomenda"
        description="Registre a entrega, vincule o morador correto e dispare a notificação automaticamente."
        actions={
          <Button variant="secondary" asChild>
            <Link href="/porteiro/encomendas">Voltar para listagem</Link>
          </Button>
        }
      />

      {params.error ? (
        <Card className="border-rose-300/16 bg-rose-300/10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 text-rose-200" />
            <div>
              <p className="text-sm font-semibold text-white">Não foi possível concluir o cadastro</p>
              <p className="mt-1 text-sm text-white/75">{params.error}</p>
            </div>
          </div>
        </Card>
      ) : null}

      <Card className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Fluxo</p>
          <h2 className="panel-title mt-2 text-2xl font-bold">Registro com notificação imediata</h2>
          <p className="mt-2 max-w-2xl text-sm text-[var(--text-muted)]">
            Cada nova encomenda entra no histórico, recebe prazo de retirada e já aparece para o morador no dashboard.
          </p>
        </div>

        <NewPackageForm residents={residents} />
      </Card>
    </div>
  );
}
