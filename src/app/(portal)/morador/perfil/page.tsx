import { CheckCircle2, CircleAlert } from "lucide-react";

import { Role } from "@/lib/prisma";

import { ResidentPasswordForm } from "@/components/forms/resident-password-form";
import { ResidentProfileForm } from "@/components/forms/resident-profile-form";
import { PageHeader } from "@/components/layout/page-header";
import { PushNotificationToggle } from "@/components/push-notification-toggle";
import { Card } from "@/components/ui/card";
import { requireRole } from "@/lib/auth/session";
import { prisma } from "@/lib/db";

type SearchParams = Promise<{
  error?: string;
  status?: string;
}>;

const statusMessages: Record<string, string> = {
  "profile-updated": "Seus dados foram atualizados com sucesso.",
  "password-updated": "Sua senha foi atualizada e o acesso ja esta protegido."
};

export default async function ResidentProfilePage({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  const session = await requireRole(Role.RESIDENT);
  const params = await searchParams;
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      unit: {
        include: {
          tower: true
        }
      }
    }
  });

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Meu cadastro"
        title="Perfil"
        description="Atualize seus dados de acesso, habilite notificacoes do aparelho e mantenha o login funcional no dia a dia."
      />

      {params.error ? (
        <Card className="border-rose-300/16 bg-rose-300/10">
          <div className="flex items-start gap-3">
            <CircleAlert className="mt-0.5 h-5 w-5 text-rose-200" />
            <div>
              <p className="text-sm font-semibold text-white">Nao foi possivel concluir a operacao</p>
              <p className="mt-1 text-sm text-white/75">{params.error}</p>
            </div>
          </div>
        </Card>
      ) : null}

      {params.status && statusMessages[params.status] ? (
        <Card className="border-emerald-300/16 bg-emerald-300/10">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-200" />
            <div>
              <p className="text-sm font-semibold text-white">Operacao concluida</p>
              <p className="mt-1 text-sm text-white/75">{statusMessages[params.status]}</p>
            </div>
          </div>
        </Card>
      ) : null}

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand)]">Identidade</p>
            <h2 className="panel-title mt-2 text-2xl font-bold">Dados de acesso</h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Revise nome, e-mail e telefone para manter os avisos sincronizados com sua rotina.
            </p>
          </div>
          <ResidentProfileForm
            resident={{
              name: user?.name ?? "",
              email: user?.email ?? "",
              phone: user?.phone ?? "",
              mustChangePassword: Boolean(user?.mustChangePassword)
            }}
          />
        </Card>

        <Card className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand)]">Unidade</p>
          <div>
            <p className="text-lg font-semibold text-white">{user?.unit?.tower.name}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{user?.unit?.label}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Em caso de inconsistencias cadastrais, solicite ajuste a portaria.
            </p>
          </div>
          <div className="rounded-[22px] border border-white/8 bg-white/5 p-4">
            <p className="text-sm font-semibold text-white">Notificacoes do aparelho</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              O push complementa o aviso interno e o WhatsApp quando as chaves do ambiente estiverem configuradas.
            </p>
            <div className="mt-4">
              <PushNotificationToggle />
            </div>
          </div>
        </Card>
      </div>

      <Card className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand)]">Seguranca</p>
          <h2 className="panel-title mt-2 text-2xl font-bold">Trocar senha</h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Use uma senha forte para transformar o login provisório em acesso pessoal definitivo.
          </p>
        </div>
        <ResidentPasswordForm />
      </Card>
    </div>
  );
}
