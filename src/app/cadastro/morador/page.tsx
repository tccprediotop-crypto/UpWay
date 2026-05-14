import Link from "next/link";
import { ArrowLeft, CircleAlert, Home, ShieldCheck } from "lucide-react";
import { redirect } from "next/navigation";

import { ResidentSignupForm } from "@/components/forms/resident-signup-form";
import { Card } from "@/components/ui/card";
import { resolveSession } from "@/lib/auth/session";

type SearchParams = Promise<{
  error?: string;
}>;

export default async function ResidentSignupPage({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const { session } = await resolveSession();

  if (session) {
    redirect("/");
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
                  Cadastro de morador
                </p>
                <h1 className="panel-title text-balance text-5xl font-bold leading-tight">
                  Crie sua conta com bloco e apartamento para entrar no fluxo real do condominio.
                </h1>
                <p className="text-base leading-8 text-[var(--text-muted)]">
                  O cadastro ja vincula sua unidade, deixa o historico pronto para futuras encomendas e libera o acesso ao painel do morador.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="glass-card-soft rounded-[28px] p-5">
                <Home className="h-6 w-6 text-[var(--brand)]" />
                <p className="mt-4 text-lg font-semibold text-white">Unidade vinculada</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  Informe bloco e apartamento para conectar sua conta ao endereco correto.
                </p>
              </div>
              <div className="glass-card-soft rounded-[28px] p-5">
                <ShieldCheck className="h-6 w-6 text-[var(--brand)]" />
                <p className="mt-4 text-lg font-semibold text-white">Acesso pessoal</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  Sua senha ja nasce pessoal e pronta para acompanhar tokens, retiradas e avisos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="glass-card rounded-[40px] p-8 md:p-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
              Criar conta
            </p>
            <h2 className="panel-title text-4xl font-bold">Nova conta de morador</h2>
            <p className="text-sm leading-7 text-[var(--text-muted)]">
              Preencha seus dados reais para criar a conta e acessar o painel assim que o cadastro for concluido.
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
            <ResidentSignupForm />
          </div>
        </section>
      </div>
    </div>
  );
}
