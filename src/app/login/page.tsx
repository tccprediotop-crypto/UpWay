import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CircleAlert,
  KeyRound,
  ShieldCheck,
  Sparkles,
  UserRoundPlus
} from "lucide-react";
import { redirect } from "next/navigation";

import { LoginForm } from "@/components/login-form";
import { StaleSessionReset } from "@/components/stale-session-reset";
import { Card } from "@/components/ui/card";
import { resolveSession } from "@/lib/auth/session";
import { hasOperationalUsers } from "@/lib/queries";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{
  error?: string;
  status?: string;
}>;

const errorMessages: Record<string, string> = {
  inactive:
    "O banco foi recriado ou o usuario antigo nao esta mais ativo. Entre novamente para renovar o acesso.",
  "porter-signup-closed":
    "A configuracao inicial da portaria ja foi concluida. Use uma conta operacional existente para acessar o sistema."
};

const statusMessages: Record<string, string> = {
  "porter-account-created":
    "A primeira conta da portaria foi criada com sucesso. Entre abaixo para iniciar a operacao.",
  "resident-account-created":
    "Sua conta de morador foi criada com sucesso. Entre com o e-mail e a senha definidos no cadastro."
};

export default async function LoginPage({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const { session, staleSession } = await resolveSession();

  if (session) {
    redirect("/");
  }

  const operationalUsersAlreadyExist = await hasOperationalUsers();
  const feedbackMessage = params.error ? errorMessages[params.error] : undefined;
  const successMessage = params.status ? statusMessages[params.status] : undefined;
  const shouldShowInactiveWarning = staleSession || params.error === "inactive";

  return (
    <div className="mx-auto flex min-h-screen max-w-[1480px] items-center px-4 py-6 lg:px-6">
      {shouldShowInactiveWarning ? <StaleSessionReset /> : null}

      <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1.15fr)_520px]">
        <section className="glass-card relative overflow-hidden rounded-[40px] p-8 md:p-12 lg:p-14">
          <div className="bg-grid" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                <Sparkles className="h-4 w-4" />
                UpWay 2026
              </div>
              <div className="max-w-3xl space-y-4">
                <h1 className="panel-title text-balance text-5xl font-bold leading-tight md:text-6xl">
                  Gestao de encomendas com fluxo real de portaria, morador e retirada.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-[var(--text-muted)] md:text-lg">
                  O processo manual do condominio virou uma operacao digital: contas reais, cadastro por unidade,
                  notificacoes automatizadas e retirada rastreavel.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="glass-card-soft rounded-[28px] p-5">
                <ShieldCheck className="h-6 w-6 text-[var(--brand)]" />
                <p className="mt-4 text-lg font-semibold text-white">Credenciais reais</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  O acesso agora depende apenas de contas criadas no proprio banco do sistema.
                </p>
              </div>
              <div className="glass-card-soft rounded-[28px] p-5">
                <Building2 className="h-6 w-6 text-[var(--brand)]" />
                <p className="mt-4 text-lg font-semibold text-white">Bloco e apartamento</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  O morador nasce vinculado a unidade correta desde o cadastro.
                </p>
              </div>
              <div className="glass-card-soft rounded-[28px] p-5">
                <ArrowRight className="h-6 w-6 text-[var(--brand)]" />
                <p className="mt-4 text-lg font-semibold text-white">Operacao sem demo</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  Sem atalhos de teste na tela de entrada e sem login fixo da portaria.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="glass-card rounded-[40px] p-8 md:p-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
              Acesso protegido
            </p>
            <h2 className="panel-title text-4xl font-bold">Entrar no UpWay</h2>
            <p className="text-sm leading-7 text-[var(--text-muted)]">
              Entre com uma conta real da portaria ou do morador. Se ainda nao tiver acesso, use os cadastros abaixo.
            </p>
          </div>

          {feedbackMessage ? (
            <Card className="mt-6 border-amber-300/16 bg-amber-300/10">
              <div className="flex items-start gap-3">
                <CircleAlert className="mt-0.5 h-5 w-5 text-amber-200" />
                <div>
                  <p className="text-sm font-semibold text-white">Ajuste necessario</p>
                  <p className="mt-1 text-sm text-white/75">{feedbackMessage}</p>
                </div>
              </div>
            </Card>
          ) : null}

          {successMessage ? (
            <Card className="mt-6 border-emerald-300/16 bg-emerald-300/10">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-200" />
                <div>
                  <p className="text-sm font-semibold text-white">Conta pronta</p>
                  <p className="mt-1 text-sm text-white/75">{successMessage}</p>
                </div>
              </div>
            </Card>
          ) : null}

          <div className="mt-8">
            <LoginForm />
          </div>

          <div className="mt-8 grid gap-3">
            <Link
              href="/cadastro/morador"
              className="flex items-start gap-3 rounded-[24px] border border-white/10 bg-white/5 p-4 transition hover:bg-white/8"
            >
              <div className="rounded-2xl bg-white/8 p-3">
                <UserRoundPlus className="h-5 w-5 text-[var(--brand)]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Criar conta de morador</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Cadastre seu nome, telefone, bloco e apartamento para acessar o painel do morador.
                </p>
              </div>
            </Link>

            {operationalUsersAlreadyExist ? (
              <div className="flex items-start gap-3 rounded-[24px] border border-white/8 bg-white/4 p-4">
                <div className="rounded-2xl bg-white/8 p-3">
                  <KeyRound className="h-5 w-5 text-[var(--brand)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Acesso da portaria ja configurado</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Novos porteiros agora devem ser criados por uma conta operacional dentro do proprio sistema.
                  </p>
                </div>
              </div>
            ) : (
              <Link
                href="/cadastro/porteiro"
                className="flex items-start gap-3 rounded-[24px] border border-white/10 bg-white/5 p-4 transition hover:bg-white/8"
              >
                <div className="rounded-2xl bg-white/8 p-3">
                  <KeyRound className="h-5 w-5 text-[var(--brand)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Criar primeira conta da portaria</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Use este passo apenas na ativacao inicial do ambiente, quando ainda nao existe equipe cadastrada.
                  </p>
                </div>
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
