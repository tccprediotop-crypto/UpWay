"use client";

import { useEffect, useState } from "react";
import { Bell, BellOff } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

function base64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);

  return Uint8Array.from(rawData, (char) => char.charCodeAt(0));
}

export function PushNotificationToggle() {
  const [supported] = useState(
    () =>
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      "PushManager" in window &&
      "Notification" in window
  );
  const [enabled, setEnabled] = useState(false);
  const [pending, setPending] = useState(false);
  const publicKey = process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY;

  useEffect(() => {
    if (!supported) {
      return;
    }

    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => registration.pushManager.getSubscription())
      .then((subscription) => setEnabled(Boolean(subscription)))
      .catch(() => {
        setEnabled(false);
      });
  }, [supported]);

  async function enablePush() {
    if (!publicKey) {
      toast.error("As chaves de push ainda nao foram configuradas neste ambiente.");
      return;
    }

    setPending(true);

    try {
      const permission = await Notification.requestPermission();

      if (permission !== "granted") {
        throw new Error("Permissao de notificacao negada.");
      }

      const registration = await navigator.serviceWorker.register("/sw.js");
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: base64ToUint8Array(publicKey)
      });

      const response = await fetch("/api/push/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(subscription)
      });

      if (!response.ok) {
        throw new Error("Nao foi possivel salvar a inscricao push.");
      }

      setEnabled(true);
      toast.success("Push ativado com sucesso neste dispositivo.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Falha ao ativar push.");
    } finally {
      setPending(false);
    }
  }

  async function disablePush() {
    setPending(true);

    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      const subscription = await registration.pushManager.getSubscription();

      if (!subscription) {
        setEnabled(false);
        return;
      }

      const response = await fetch("/api/push/subscribe", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          endpoint: subscription.endpoint
        })
      });

      if (!response.ok) {
        throw new Error("Nao foi possivel remover a inscricao push.");
      }

      await subscription.unsubscribe();
      setEnabled(false);
      toast.success("Push desativado neste dispositivo.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Falha ao desativar push.");
    } finally {
      setPending(false);
    }
  }

  if (!supported) {
    return (
      <p className="text-sm text-[var(--text-muted)]">
        Este navegador nao suporta notificacoes push. O WhatsApp e o aviso interno continuam disponiveis.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        type="button"
        variant={enabled ? "secondary" : "primary"}
        onClick={enabled ? disablePush : enablePush}
        disabled={pending}
      >
        {enabled ? <BellOff className="h-4 w-4" /> : <Bell className="h-4 w-4" />}
        {pending ? "Processando..." : enabled ? "Desativar push" : "Ativar push"}
      </Button>
      <p className="text-sm text-[var(--text-muted)]">
        {enabled
          ? "Este aparelho recebera alertas de encomenda e seguranca."
          : "Ative para receber alertas mesmo fora da tela do sistema."}
      </p>
    </div>
  );
}
