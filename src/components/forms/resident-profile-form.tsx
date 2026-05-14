import { updateResidentProfileAction } from "@/actions/profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ResidentProfile = {
  name: string;
  email: string;
  phone: string | null;
  mustChangePassword: boolean;
};

export function ResidentProfileForm({ resident }: { resident: ResidentProfile }) {
  return (
    <form action={updateResidentProfileAction} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Nome completo</span>
          <Input name="name" defaultValue={resident.name} required />
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">E-mail</span>
          <Input name="email" type="email" defaultValue={resident.email} required />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-xs uppercase tracking-[0.2em] text-white/50">Telefone</span>
        <Input name="phone" defaultValue={resident.phone ?? ""} required />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit">Atualizar cadastro</Button>
        {resident.mustChangePassword ? (
          <p className="text-sm text-amber-200/90">
            Seu acesso ainda esta com senha provisoria. Troque na secao abaixo.
          </p>
        ) : (
          <p className="text-sm text-[var(--text-muted)]">
            Mantenha seu telefone atualizado para receber avisos por WhatsApp.
          </p>
        )}
      </div>
    </form>
  );
}
