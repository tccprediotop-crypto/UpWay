import { clsx, type ClassValue } from "clsx";
import { format, formatDistanceToNowStrict, isPast } from "date-fns";
import { ptBR } from "date-fns/locale";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateTime(value: Date | string) {
  return format(new Date(value), "dd 'de' MMM, HH:mm", {
    locale: ptBR
  });
}

export function formatLongDate(value: Date | string) {
  return format(new Date(value), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR
  });
}

export function formatRelative(value: Date | string) {
  return formatDistanceToNowStrict(new Date(value), {
    addSuffix: true,
    locale: ptBR
  });
}

export function isOverdue(dueAt?: Date | string | null) {
  if (!dueAt) {
    return false;
  }

  return isPast(new Date(dueAt));
}
