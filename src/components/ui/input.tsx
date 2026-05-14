import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-12 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(107,254,156,0.12)]",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";
