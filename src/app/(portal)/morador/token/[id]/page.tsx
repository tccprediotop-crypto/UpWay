import Link from "next/link";
import { Role } from "@/lib/prisma";
import { notFound } from "next/navigation";
import QRCode from "qrcode";

import { generatePickupTokenAction } from "@/actions/packages";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { requireRole } from "@/lib/auth/session";
import { getResidentPackageDetails } from "@/lib/queries";
import { formatDateTime } from "@/lib/utils";

type Params = Promise<{
  id: string;
}>;

export default async function ResidentTokenDetailsPage({ params }: { params: Params }) {
  const session = await requireRole(Role.RESIDENT);
  const { id } = await params;
  const pkg = await getResidentPackageDetails(id, session.user.id);

  if (!pkg) {
    notFound();
  }

  const qrDataUrl = pkg.token ? await QRCode.toDataURL(pkg.token.qrValue, { margin: 1, width: 280 }) : null;

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Token de retirada"
        title={pkg.trackingCode}
        description="Apresente este QR ou o código textual ao porteiro no momento da retirada."
        actions={
          <Button variant="secondary" asChild>
            <Link href="/morador/token">Voltar</Link>
          </Button>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
        <Card className="flex flex-col items-center justify-center gap-6 text-center">
          {pkg.token && qrDataUrl ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qrDataUrl} alt={`QR code para ${pkg.trackingCode}`} className="rounded-[28px] bg-white p-4" />
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand)]">Código textual</p>
                <p className="panel-title text-3xl font-bold">{pkg.token.code}</p>
                <p className="text-sm text-[var(--text-muted)]">
                  Expira em {formatDateTime(pkg.token.expiresAt)}
                </p>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <p className="panel-title text-2xl font-bold">Ainda não há token gerado</p>
              <p className="text-sm text-[var(--text-muted)]">
                Gere um token único para liberar a retirada digital na portaria.
              </p>
              <form action={generatePickupTokenAction}>
                <input type="hidden" name="packageId" value={pkg.id} />
                <Button type="submit">Gerar token agora</Button>
              </form>
            </div>
          )}
        </Card>

        <Card className="space-y-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Como usar</p>
            <h2 className="panel-title mt-2 text-2xl font-bold">Retirada orientada</h2>
          </div>

          <div className="space-y-4 text-sm leading-7 text-[var(--text-muted)]">
            <p>1. Dirija-se à portaria com o token aberto nesta tela.</p>
            <p>2. Apresente o QR code ou o código textual ao porteiro.</p>
            <p>3. Após a validação, a encomenda será automaticamente marcada como retirada.</p>
          </div>

          <div className="rounded-[24px] border border-white/8 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">{pkg.carrier}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{pkg.unit.label}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Recebida em {formatDateTime(pkg.receivedAt)}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
