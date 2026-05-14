import { registerBootstrapPorterAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function PorterSignupForm() {
  return (
    <form action={registerBootstrapPorterAction} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Nome completo</span>
          <Input name="name" placeholder="Ex.: Lucas Ferreira" required />
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">E-mail</span>
          <Input name="email" type="email" placeholder="portaria@condominio.com.br" required />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Telefone</span>
          <Input name="phone" placeholder="(11) 99999-0000" required />
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Cargo</span>
          <Input name="jobTitle" placeholder="Ex.: Porteiro lider" />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Senha</span>
          <Input
            name="password"
            type="password"
            minLength={8}
            placeholder="Use ao menos 8 caracteres com letra e numero"
            required
          />
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Confirmar senha</span>
          <Input name="confirmPassword" type="password" minLength={8} required />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit">Criar primeira conta da portaria</Button>
        <p className="text-sm text-[var(--text-muted)]">
          Esse fluxo fica disponivel apenas enquanto o sistema ainda nao possui uma conta operacional ativa.
        </p>
      </div>
    </form>
  );
}
