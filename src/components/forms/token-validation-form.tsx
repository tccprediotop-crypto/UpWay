"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import { toast } from "sonner";

import {
  type TokenValidationState,
  validatePickupTokenAction
} from "@/actions/packages";
import { QrScanner } from "@/components/forms/qr-scanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialState: TokenValidationState = {
  status: "idle"
};

export function TokenValidationForm() {
  const [state, formAction, pending] = useActionState(validatePickupTokenAction, initialState);
  const [code, setCode] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state.status === "success" && state.message) {
      toast.success(state.message);
    }

    if (state.status === "error" && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  function handleDetected(nextCode: string) {
    setCode(nextCode);

    requestAnimationFrame(() => {
      formRef.current?.requestSubmit();
    });
  }

  return (
    <div className="space-y-5">
      <QrScanner onDetected={handleDetected} />

      <form ref={formRef} action={formAction} className="flex flex-col gap-4 md:flex-row">
        <Input
          name="code"
          placeholder="Leia o QR, informe o token ou codigo da encomenda"
          autoComplete="off"
          className="flex-1"
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? "Validando..." : "Validar retirada"}
        </Button>
      </form>

      {state.status !== "idle" ? (
        <div
          className={`rounded-[24px] border p-4 ${
            state.status === "success"
              ? "border-emerald-300/16 bg-emerald-300/10"
              : "border-rose-300/16 bg-rose-300/10"
          }`}
        >
          <div className="flex items-start gap-3">
            {state.status === "success" ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-200" />
            ) : (
              <ShieldAlert className="mt-0.5 h-5 w-5 text-rose-200" />
            )}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">{state.message}</p>
              {state.packageId ? (
                <Link href={`/porteiro/encomendas/${state.packageId}`} className="text-sm text-[var(--brand)]">
                  Abrir detalhes da encomenda
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
