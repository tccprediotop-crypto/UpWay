import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      role: "ADMIN" | "PORTER" | "RESIDENT";
      unitId?: string | null;
      mustChangePassword: boolean;
    };
  }

  interface User {
    role: "ADMIN" | "PORTER" | "RESIDENT";
    unitId?: string | null;
    mustChangePassword?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "ADMIN" | "PORTER" | "RESIDENT";
    unitId?: string | null;
    mustChangePassword?: boolean;
  }
}
