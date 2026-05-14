import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="glass-card max-w-xl rounded-[32px] p-10 text-center">
        <p className="text-sm uppercase tracking-[0.24em] text-[var(--brand)]">404</p>
        <h1 className="panel-title mt-4 text-4xl font-bold">Página não encontrada</h1>
        <p className="mt-3 text-[var(--text-muted)]">
          O caminho solicitado não existe mais ou ainda não foi provisionado neste ambiente.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/">Voltar para o painel</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
