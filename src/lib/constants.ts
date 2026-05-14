export type NavIcon =
  | "bell"
  | "clipboard-list"
  | "history"
  | "home"
  | "package-plus"
  | "settings"
  | "shield-check"
  | "user-round";

export type NavItem = {
  href: string;
  label: string;
  icon: NavIcon;
};

export const porterNav: NavItem[] = [
  { href: "/porteiro/dashboard", label: "Painel", icon: "home" },
  { href: "/porteiro/encomendas", label: "Encomendas", icon: "clipboard-list" },
  { href: "/porteiro/encomendas/nova", label: "Nova Encomenda", icon: "package-plus" },
  { href: "/porteiro/moradores", label: "Moradores", icon: "user-round" },
  { href: "/porteiro/historico", label: "Historico", icon: "history" },
  { href: "/porteiro/retirada", label: "Validacao", icon: "shield-check" },
  { href: "/porteiro/configuracoes", label: "Configuracoes", icon: "settings" }
];

export const residentNav: NavItem[] = [
  { href: "/morador/dashboard", label: "Painel", icon: "home" },
  { href: "/morador/encomendas", label: "Minhas Encomendas", icon: "clipboard-list" },
  { href: "/morador/token", label: "Tokens", icon: "bell" },
  { href: "/morador/historico", label: "Historico", icon: "history" },
  { href: "/morador/perfil", label: "Perfil", icon: "user-round" }
];
