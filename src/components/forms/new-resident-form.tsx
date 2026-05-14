import { createResidentAction } from "@/actions/residents";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

type UnitOption = {
  id: string;
  label: string;
  tower: {
    name: string;
  };
};

export function NewResidentForm({ units }: { units: UnitOption[] }) {
  return (
    <form action={createResidentAction} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Nome completo</span>
          <Input name="name" placeholder="Ex.: Fernanda Rocha" required />
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">E-mail</span>
          <Input name="email" type="email" placeholder="fernanda@upway.app" required />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Telefone</span>
          <Input name="phone" placeholder="(11) 99999-9999" required />
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Unidade</span>
          <Select name="unitId" defaultValue="" required>
            <option value="" disabled className="bg-slate-950 text-white">
              Selecione a unidade
            </option>
            {units.map((unit) => (
              <option key={unit.id} value={unit.id} className="bg-slate-950 text-white">
                {unit.tower.name} • {unit.label}
              </option>
            ))}
          </Select>
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-xs uppercase tracking-[0.2em] text-white/50">Senha inicial</span>
        <Input
          name="password"
          type="password"
          minLength={8}
          placeholder="Use ao menos 8 caracteres com letra e numero"
          required
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit">Cadastrar morador</Button>
        <p className="text-sm text-[var(--text-muted)]">
          O acesso ja nasce funcional e o morador sera orientado a revisar a senha no primeiro uso.
        </p>
      </div>
    </form>
  );
}
