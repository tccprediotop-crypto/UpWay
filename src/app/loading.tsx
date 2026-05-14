export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="glass-card rounded-[32px] px-10 py-8 text-center">
        <p className="panel-title text-2xl font-bold">Carregando painel</p>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Organizando as encomendas, avisos e status da operação.
        </p>
      </div>
    </div>
  );
}
