import Link from "next/link";
import { CheckCircle2, CircleAlert } from "lucide-react";

import { NewResidentForm } from "@/components/forms/new-resident-form";
import { NewUnitForm } from "@/components/forms/new-unit-form";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getResidents, getUnits } from "@/lib/queries";

type SearchParams = Promise<{
  error?: string;
  status?: string;
}>;

const successMessages: Record<string, string> = {
  "resident-created": "O novo perfil ja pode acessar o app com a senha inicial informada.",
  "resident-archived": "O perfil foi arquivado e o historico operacional foi preservado.",
  "unit-created": "Apartamento criado com sucesso e ja disponivel no cadastro de moradores."
};

export default async function ResidentsPage({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const [residents, units] = await Promise.all([getResidents(true), getUnits()]);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Base cadastral"
        title="Moradores e apartamentos"
        description="Cadastre unidades e moradores, ajuste dados existentes e arquive perfis sem perder rastreabilidade."
      />

      {params.error ? (
        <Card className="border-rose-300/16 bg-rose-300/10">
          <div className="flex items-start gap-3">
            <CircleAlert className="mt-0.5 h-5 w-5 text-rose-200" />
            <div>
              <p className="text-sm font-semibold text-white">Falha na operacao</p>
              <p className="mt-1 text-sm text-white/75">{params.error}</p>
            </div>
          </div>
        </Card>
      ) : null}

      {params.status && successMessages[params.status] ? (
        <Card className="border-emerald-300/16 bg-emerald-300/10">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-200" />
            <div>
              <p className="text-sm font-semibold text-white">Operacao concluida</p>
              <p className="mt-1 text-sm text-white/75">{successMessages[params.status]}</p>
            </div>
          </div>
        </Card>
      ) : null}

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <Card className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Novo perfil</p>
            <h2 className="panel-title mt-2 text-2xl font-bold">Cadastrar morador</h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Vinculo direto com unidade, telefone para avisos e senha inicial pronta para uso.
            </p>
          </div>
          <NewResidentForm units={units} />
        </Card>

        <Card className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Base predial</p>
            <h2 className="panel-title mt-2 text-2xl font-bold">Cadastrar apartamento</h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Amplie a base de unidades antes de distribuir novos acessos para moradores.
            </p>
          </div>
          <NewUnitForm />
        </Card>
      </div>

      <Card className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Base ativa</p>
            <h2 className="panel-title mt-2 text-2xl font-bold">Moradores cadastrados</h2>
          </div>
          <Button variant="secondary" asChild>
            <Link href="/porteiro/configuracoes">Ver auditoria administrativa</Link>
          </Button>
        </div>

        <div className="grid gap-4">
          {residents.map((resident) => (
            <div key={resident.id} className="rounded-[24px] border border-white/8 bg-white/5 p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-lg font-semibold text-white">{resident.name}</p>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        resident.isActive
                          ? "bg-emerald-300/12 text-emerald-100"
                          : "bg-amber-300/12 text-amber-100"
                      }`}
                    >
                      {resident.isActive ? "Ativo" : "Arquivado"}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {resident.unit?.tower.name} • {resident.unit?.label}
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{resident.email}</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Ultimo acesso: {resident.lastLoginAt ? resident.lastLoginAt.toLocaleString("pt-BR") : "ainda nao acessou"}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                  <span>{resident.residentPackages.length} encomendas recentes</span>
                  <Button variant="secondary" asChild>
                    <Link href={`/porteiro/moradores/${resident.id}`}>Editar perfil</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
