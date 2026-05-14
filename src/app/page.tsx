import { redirect } from "next/navigation";

import { Role } from "@/lib/prisma";

import { resolveSession } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { session, staleSession } = await resolveSession();

  if (!session) {
    redirect(staleSession ? "/login?error=inactive" : "/login");
  }

  if (session.user.role === Role.RESIDENT) {
    redirect("/morador/dashboard");
  }

  redirect("/porteiro/dashboard");
}
