import { redirect } from "next/navigation";

<<<<<<< HEAD
// Teste de commit
=======
>>>>>>> 669a38eb7a425d21cd0472161b538b342eceaeca
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
