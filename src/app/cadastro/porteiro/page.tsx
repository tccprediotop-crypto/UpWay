import Link from "next/link";
import { ArrowLeft, CircleAlert, ShieldCheck, UserRound } from "lucide-react";
import { redirect } from "next/navigation";

import { PorterSignupForm } from "@/components/forms/porter-signup-form";
import { Card } from "@/components/ui/card";
import { resolveSession } from "@/lib/auth/session";
import { hasOperationalUsers } from "@/lib/queries";

type SearchParams = Promise<{
  error?: string;
}>;

export default async function PorterSignupPage({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const { session } = await resolveSession();

  if (session) {
    redirect("/");
  }

  const operationalUsersAlreadyExist = await hasOperationalUsers();

  if (operationalUsersAlreadyExist) {
    redirect("/login?error=porter-signup-closed");
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-[1320px] items-center px-4 py-6 lg:px-6">
      <div className="grid w-full gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="glass-card relative overflow-hidden rounded-[40px] p-8 md:p-12">
          <div className="bg-grid" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-10">
            <div className="space-y-6">
              <Link href="/login" className="inline-flex items-center gap-2 text-sm text-[var(--brand)]">
                <ArrowLeft className="h-4 w-4" />
                Voltar para o login
              </Link>
              <div className="max-w-2xl space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                  Bootstrap operacional
                </p>
                <h1 className="panel-title text-balance text-5xl font-bold leading-tight">
                  Configure a primeira conta da portaria para iniciar a operacao real do sistema.
                </h1>
                <p className="text-base leading-8 text-[var(--text-muted)]">
                  Esse cadastro inicial substitui o acesso fixo antigo e libera a administracao das encomendas e dos demais usuarios operacionais.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="glass-card-soft rounded-[28px] p-5">
                <ShieldCheck className="h-6 w-6 text-[var(--brand)]" />
                <p className="mt-4 text-lg font-semibold text-white">Sem senha padrao</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  A conta nasce com credenciais definidas pela propria equipe operacional.
                </p>
              </div>
              <div className="glass-card-soft rounded-[28px] p-5">
                <UserRound className="h-6 w-6 text-[var(--brand)]" />
                <p className="mt-4 text-lg font-semibold text-white">Base da equipe</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  Depois do primeiro acesso, novos porteiros passam a ser criados dentro do sistema.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="glass-card rounded-[40px] p-8 md:p-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
              Configuracao inicial
            </p>
            <h2 className="panel-title text-4xl font-bold">Primeira conta da portaria</h2>
            <p className="text-sm leading-7 text-[var(--text-muted)]">
              Use este formulario apenas na primeira ativacao do ambiente. Depois disso, a gestao da equipe fica no painel interno.
            </p>
          </div>

          {params.error ? (
            <Card className="mt-6 border-rose-300/16 bg-rose-300/10">
              <div className="flex items-start gap-3">
                <CircleAlert className="mt-0.5 h-5 w-5 text-rose-200" />
                <div>
                  <p className="text-sm font-semibold text-white">Nao foi possivel criar a conta</p>
                  <p className="mt-1 text-sm text-white/75">{params.error}</p>
                </div>
              </div>
            </Card>
          ) : null}

          <div className="mt-8">
            <PorterSignupForm />
          </div>
        </section>
      </div>
    </div>
  );
}
