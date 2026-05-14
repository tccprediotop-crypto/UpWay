import { cn } from "@/lib/utils";

export function Card({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={cn("glass-card rounded-[28px] p-6", className)}>{children}</section>;
}
