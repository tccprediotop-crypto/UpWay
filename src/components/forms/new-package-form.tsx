import { createPackageAction } from "@/actions/packages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type ResidentOption = {
  id: string;
  name: string;
  unit: {
    label: string;
  } | null;
};

export function NewPackageForm({ residents }: { residents: ResidentOption[] }) {
  return (
    <form action={createPackageAction} className="grid gap-5">
      <label className="space-y-2">
        <span className="text-xs uppercase tracking-[0.2em] text-white/50">Morador</span>
        <Select name="residentId" defaultValue="" required>
          <option value="" disabled className="bg-slate-950 text-white">
            Selecione o morador
          </option>
          {residents.map((resident) => (
            <option key={resident.id} value={resident.id} className="bg-slate-950 text-white">
              {resident.name} {resident.unit ? `• ${resident.unit.label}` : ""}
            </option>
          ))}
        </Select>
      </label>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Código de rastreamento</span>
          <Input name="trackingCode" placeholder="UPW-9001" required />
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Transportadora</span>
          <Input name="carrier" placeholder="Correios, Amazon, Mercado Entregas..." required />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-xs uppercase tracking-[0.2em] text-white/50">Descrição</span>
        <Textarea
          name="description"
          placeholder="Ex.: caixa média com eletrônicos, documentos, peças ou compras gerais."
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" size="lg">
          Cadastrar e notificar morador
        </Button>
        <p className="text-sm text-[var(--text-muted)]">
          O sistema já cria o histórico inicial e a notificação automática.
        </p>
      </div>
    </form>
  );
}
