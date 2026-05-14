import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
  {
    variants: {
      tone: {
        success: "border-emerald-300/16 bg-emerald-300/12 text-emerald-200",
        warning: "border-amber-300/16 bg-amber-300/12 text-amber-200",
        brand: "border-sky-300/16 bg-sky-300/12 text-sky-200",
        muted: "border-white/10 bg-white/8 text-white/70",
        neutral: "border-white/10 bg-white/6 text-white/75"
      }
    },
    defaultVariants: {
      tone: "neutral"
    }
  }
);

export function Badge({
  tone,
  className,
  children
}: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ tone }), className)}>{children}</span>;
}
