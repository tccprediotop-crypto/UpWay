"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  ClipboardList,
  History,
  Home,
  PackagePlus,
  Settings,
  ShieldCheck,
  UserRound
} from "lucide-react";

import type { NavIcon, NavItem } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<NavIcon, React.ComponentType<{ className?: string }>> = {
  bell: Bell,
  "clipboard-list": ClipboardList,
  history: History,
  home: Home,
  "package-plus": PackagePlus,
  settings: Settings,
  "shield-check": ShieldCheck,
  "user-round": UserRound
};

export function SidebarNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      {items.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
        const Icon = iconMap[item.icon];

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
              isActive
                ? "bg-[rgba(107,254,156,0.14)] text-white shadow-[inset_0_0_0_1px_rgba(107,254,156,0.18)]"
                : "text-white/62 hover:bg-white/6 hover:text-white"
            )}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
