export function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand)] text-lg font-black text-[var(--brand-ink)] shadow-[0_12px_30px_rgba(107,254,156,0.3)]">
        U
      </div>
      <div>
        <p className="panel-title text-lg font-bold tracking-tight text-white">UpWay</p>
        <p className="text-xs uppercase tracking-[0.24em] text-white/45">Gestão de Encomendas</p>
      </div>
    </div>
  );
}
