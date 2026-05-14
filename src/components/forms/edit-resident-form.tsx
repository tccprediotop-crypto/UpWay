import { archiveResidentAction, updateResidentAction } from "@/actions/residents";
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

type ResidentRecord = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  unitId: string | null;
  isActive: boolean;
};

export function EditResidentForm({
  resident,
  units
}: {
  resident: ResidentRecord;
  units: UnitOption[];
}) {
  return (
    <div className="space-y-5">
      <form action={updateResidentAction} className="grid gap-5">
        <input type="hidden" name="residentId" value={resident.id} />

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

        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">Telefone</span>
            <Input name="phone" defaultValue={resident.phone ?? ""} required />
          </label>

          <label className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">Unidade</span>
            <Select name="unitId" defaultValue={resident.unitId ?? ""} required>
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
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">
            Redefinir senha
          </span>
          <Input
            name="password"
            type="password"
            minLength={8}
            placeholder="Preencha apenas se quiser trocar a senha"
          />
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit">Salvar alteracoes</Button>
          <p className="text-sm text-[var(--text-muted)]">
            {resident.isActive
              ? "Se redefinir a senha, o morador sera orientado a trocar no proximo acesso."
              : "Este cadastro ja esta arquivado e permanece apenas por rastreabilidade."}
          </p>
        </div>
      </form>

      {resident.isActive ? (
        <form action={archiveResidentAction}>
          <input type="hidden" name="residentId" value={resident.id} />
          <Button type="submit" variant="danger">
            Arquivar perfil de morador
          </Button>
        </form>
      ) : null}
    </div>
  );
}
