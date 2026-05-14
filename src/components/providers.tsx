"use client";

import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          className: "!border-white/10 !bg-slate-950/90 !text-white"
        }}
      />
    </>
  );
}
