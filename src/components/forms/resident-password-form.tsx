import { changeResidentPasswordAction } from "@/actions/profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ResidentPasswordForm() {
  return (
    <form action={changeResidentPasswordAction} className="space-y-5">
      <label className="space-y-2">
        <span className="text-xs uppercase tracking-[0.2em] text-white/50">Senha atual</span>
        <Input name="currentPassword" type="password" minLength={8} required />
      </label>

      <label className="space-y-2">
        <span className="text-xs uppercase tracking-[0.2em] text-white/50">Nova senha</span>
        <Input
          name="newPassword"
          type="password"
          minLength={8}
          placeholder="Use ao menos 8 caracteres com letra e numero"
          required
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" variant="secondary">
          Atualizar senha
        </Button>
        <p className="text-sm text-[var(--text-muted)]">
          A nova senha passa a valer imediatamente para o proximo login.
        </p>
      </div>
    </form>
  );
}
