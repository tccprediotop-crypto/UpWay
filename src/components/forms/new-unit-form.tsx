import { createUnitAction } from "@/actions/residents";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewUnitForm() {
  return (
    <form action={createUnitAction} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Torre</span>
          <Input name="towerName" placeholder="Ex.: Torre Norte" required />
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">Apartamento</span>
          <Input name="number" placeholder="Ex.: 1203" required />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-xs uppercase tracking-[0.2em] text-white/50">Andar</span>
        <Input name="floor" type="number" min={0} max={250} placeholder="Opcional" />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" variant="secondary">
          Cadastrar apartamento
        </Button>
        <p className="text-sm text-[var(--text-muted)]">
          Se a torre ainda nao existir, ela sera criada automaticamente.
        </p>
      </div>
    </form>
  );
}
