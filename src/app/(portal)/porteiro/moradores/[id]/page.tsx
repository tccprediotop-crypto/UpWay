import Link from "next/link";
import { CheckCircle2, CircleAlert } from "lucide-react";
import { notFound } from "next/navigation";

import { EditResidentForm } from "@/components/forms/edit-resident-form";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getResidentById, getUnits } from "@/lib/queries";
import { formatDateTime } from "@/lib/utils";

type PageParams = Promise<{
  id: string;
}>;

type SearchParams = Promise<{
  error?: string;
  status?: string;
}>;

const statusMessages: Record<string, string> = {
  updated: "O cadastro do morador foi atualizado com sucesso."
};

export default async function ResidentManagementPage({
  params,
  searchParams
}: {
  params: PageParams;
  searchParams: SearchParams;
}) {
  const route = await params;
  const query = await searchParams;
  const [resident, units] = await Promise.all([getResidentById(route.id), getUnits()]);

  if (!resident) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Manutencao de perfil"
        title={resident.name}
        description="Ajuste dados de acesso, unidade e estado do cadastro sem perder o historico das encomendas."
        actions={
          <Button variant="secondary" asChild>
            <Link href="/porteiro/moradores">Voltar para moradores</Link>
          </Button>
        }
      />

      {query.error ? (
        <Card className="border-rose-300/16 bg-rose-300/10">
          <div className="flex items-start gap-3">
            <CircleAlert className="mt-0.5 h-5 w-5 text-rose-200" />
            <div>
              <p className="text-sm font-semibold text-white">Nao foi possivel salvar</p>
              <p className="mt-1 text-sm text-white/75">{query.error}</p>
            </div>
          </div>
        </Card>
      ) : null}

      {query.status && statusMessages[query.status] ? (
        <Card className="border-emerald-300/16 bg-emerald-300/10">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-200" />
            <div>
              <p className="text-sm font-semibold text-white">Cadastro atualizado</p>
              <p className="mt-1 text-sm text-white/75">{statusMessages[query.status]}</p>
            </div>
          </div>
        </Card>
      ) : null}

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Card className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Edicao</p>
            <h2 className="panel-title mt-2 text-2xl font-bold">Dados do morador</h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Atualize e-mail, telefone, unidade e senha provisoria quando necessario.
            </p>
          </div>
          <EditResidentForm resident={resident} units={units} />
        </Card>

        <Card className="space-y-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Contexto operacional</p>
            <h2 className="panel-title mt-2 text-2xl font-bold">Resumo do perfil</h2>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[24px] border border-white/8 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Unidade atual</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {resident.unit?.tower.name} • {resident.unit?.label}
              </p>
            </div>
            <div className="rounded-[24px] border border-white/8 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Ultimo acesso</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {resident.lastLoginAt ? formatDateTime(resident.lastLoginAt) : "Ainda nao houve login"}
              </p>
            </div>
            <div className="rounded-[24px] border border-white/8 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Encomendas recentes</p>
              <div className="mt-3 space-y-3">
                {resident.residentPackages.length === 0 ? (
                  <p className="text-sm text-[var(--text-muted)]">Sem encomendas registradas para este perfil.</p>
                ) : (
                  resident.residentPackages.map((pkg) => (
                    <div key={pkg.id} className="rounded-[18px] border border-white/8 bg-white/4 p-3">
                      <p className="text-sm font-semibold text-white">{pkg.trackingCode}</p>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">{pkg.carrier}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
