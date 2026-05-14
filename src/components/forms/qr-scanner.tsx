"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, CameraOff, ScanQrCode } from "lucide-react";

import { Button } from "@/components/ui/button";
import { normalizePickupCode } from "@/lib/pickup-code";

type BarcodeDetectorCtor = new (options?: {
  formats?: string[];
}) => {
  detect: (source: CanvasImageSource) => Promise<Array<{ rawValue?: string }>>;
};

declare global {
  interface Window {
    BarcodeDetector?: BarcodeDetectorCtor;
  }
}

export function QrScanner({ onDetected }: { onDetected: (code: string) => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const frameRef = useRef<number | null>(null);
  const [active, setActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  async function stopScanner() {
    setActive(false);

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  }

  async function startScanner() {
    setError(null);

    if (!navigator.mediaDevices?.getUserMedia) {
      setError("Camera indisponivel neste navegador.");
      return;
    }

    if (!window.BarcodeDetector) {
      setError("Leitura nativa de QR nao disponivel. Use o campo manual.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment"
        }
      });

      streamRef.current = stream;
      setActive(true);

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      const detector = new window.BarcodeDetector({
        formats: ["qr_code"]
      });

      const scan = async () => {
        if (!videoRef.current) {
          return;
        }

        try {
          const codes = await detector.detect(videoRef.current);
          const value = codes[0]?.rawValue;

          if (value) {
            onDetected(normalizePickupCode(value));
            await stopScanner();
            return;
          }
        } catch {
          setError("Nao foi possivel interpretar o QR agora. Tente novamente.");
        }

        frameRef.current = requestAnimationFrame(scan);
      };

      frameRef.current = requestAnimationFrame(scan);
    } catch {
      setError("Permissao de camera negada ou indisponivel.");
      await stopScanner();
    }
  }

  return (
    <div className="space-y-4 rounded-[24px] border border-white/8 bg-white/5 p-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button type="button" variant={active ? "secondary" : "primary"} onClick={active ? stopScanner : startScanner}>
          {active ? <CameraOff className="h-4 w-4" /> : <Camera className="h-4 w-4" />}
          {active ? "Parar camera" : "Ler QR pela camera"}
        </Button>
        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
          <ScanQrCode className="h-4 w-4 text-[var(--brand)]" />
          A leitura preenche o token automaticamente quando o navegador permitir.
        </div>
      </div>

      {active ? (
        <video
          ref={videoRef}
          className="h-64 w-full rounded-[20px] border border-white/8 bg-slate-950/70 object-cover"
          muted
          playsInline
        />
      ) : null}

      {error ? <p className="text-sm text-amber-200/90">{error}</p> : null}
    </div>
  );
}
