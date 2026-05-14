import { registerResidentAccountAction } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ResidentSignupForm() {
  return (
    <form action={registerResidentAccountAction} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Nome completo</span>
          <Input name="name" placeholder="Ex.: Fernanda Rocha" required />
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">E-mail</span>
          <Input name="email" type="email" placeholder="voce@condominio.com.br" required />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Telefone</span>
          <Input name="phone" placeholder="(11) 99999-9999" required />
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Bloco / torre</span>
          <Input name="towerName" placeholder="Ex.: Bloco A" required />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Apartamento</span>
          <Input name="unitNumber" placeholder="Ex.: 1203" required />
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Andar</span>
          <Input name="floor" type="number" min={0} max={250} placeholder="Opcional" />
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
        <Button type="submit">Criar conta de morador</Button>
        <p className="text-sm text-[var(--text-muted)]">
          Se a unidade ainda nao existir, ela sera criada automaticamente com o bloco e apartamento informados.
        </p>
      </div>
    </form>
  );
}
