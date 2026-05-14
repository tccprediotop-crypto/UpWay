import type { Session } from "next-auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { Role } from "@/lib/prisma";

import { authOptions } from "@/lib/auth/options";
import { prisma } from "@/lib/db";

type SessionResolution = {
  session: Session | null;
  staleSession: boolean;
};

export async function getSession() {
  return getServerSession(authOptions);
}

export async function resolveSession(): Promise<SessionResolution> {
  const session = await getSession();

  if (!session) {
    return {
      session: null,
      staleSession: false
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      unitId: true,
      isActive: true,
      mustChangePassword: true
    }
  });

  if (!user?.isActive) {
    return {
      session: null,
      staleSession: true
    };
  }

  return {
    session: {
      ...session,
      user: {
        ...session.user,
        name: user.name,
        email: user.email,
        role: user.role,
        unitId: user.unitId,
        mustChangePassword: user.mustChangePassword
      }
    },
    staleSession: false
  };
}

export async function requireAuth() {
  const { session, staleSession } = await resolveSession();

  if (!session) {
    redirect(staleSession ? "/login?error=inactive" : "/login");
  }

  return session;
}

export function roleHome(role: Role) {
  if (role === Role.PORTER || role === Role.ADMIN) {
    return "/porteiro/dashboard";
  }

  return "/morador/dashboard";
}

export async function requireRole(role: Role) {
  const session = await requireAuth();

  if (session.user.role !== role && !(role === Role.PORTER && session.user.role === Role.ADMIN)) {
    redirect(roleHome(session.user.role as Role));
  }

  return session;
}
