import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

import { AuditAction, AuditEntityType, Role } from "@/lib/prisma";

import { verifyPassword } from "@/lib/auth/password";
import {
  clearThrottle,
  ensureThrottleAllows,
  loginThrottleConfig,
  registerThrottleFailure
} from "@/lib/auth/throttle";
import { createAuditLog } from "@/lib/audit";
import { prisma } from "@/lib/db";

const loginSchema = z.object({
  email: z.string().email().transform((value) => value.trim().toLowerCase()),
  password: z.string().min(8)
});

function loginBlockedMessage(retryAfterSeconds?: number) {
  if (!retryAfterSeconds) {
    return "Muitas tentativas de acesso. Aguarde alguns minutos antes de tentar novamente.";
  }

  return `Muitas tentativas de acesso. Aguarde ${retryAfterSeconds} segundos antes de tentar novamente.`;
}

export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);

        if (!parsed.success) {
          return null;
        }

        const { email, password } = parsed.data;
        const throttleStatus = await ensureThrottleAllows(email, loginThrottleConfig);

        if (!throttleStatus.allowed) {
          await createAuditLog({
            action: AuditAction.LOGIN_FAILED,
            entityType: AuditEntityType.AUTH,
            description: `Tentativa de login temporariamente bloqueada para ${email}.`,
            context: {
              email,
              reason: "rate-limited",
              retryAfterSeconds: throttleStatus.retryAfterSeconds ?? null
            }
          });

          throw new Error(loginBlockedMessage(throttleStatus.retryAfterSeconds));
        }

        const user = await prisma.user.findUnique({
          where: {
            email
          }
        });

        if (!user || !user.isActive) {
          const failureStatus = await registerThrottleFailure(email, loginThrottleConfig);

          await createAuditLog({
            action: AuditAction.LOGIN_FAILED,
            entityType: AuditEntityType.AUTH,
            description: `Tentativa de login falhou para ${email}.`,
            context: {
              reason: user?.isActive === false ? "inactive-user" : "missing-user",
              email
            }
          });

          if (!failureStatus.allowed) {
            throw new Error(loginBlockedMessage(failureStatus.retryAfterSeconds));
          }

          return null;
        }
        const isPasswordValid = await verifyPassword(password, user.passwordHash);

        if (!isPasswordValid) {
          const failureStatus = await registerThrottleFailure(email, loginThrottleConfig);

          await createAuditLog({
            action: AuditAction.LOGIN_FAILED,
            entityType: AuditEntityType.AUTH,
            actorId: user.id,
            entityId: user.id,
            description: `Tentativa de login com senha invalida para ${email}.`,
            context: {
              email
            }
          });

          if (!failureStatus.allowed) {
            throw new Error(loginBlockedMessage(failureStatus.retryAfterSeconds));
          }

          return null;
        }

        await clearThrottle(email, loginThrottleConfig);

        await prisma.user.update({
          where: {
            id: user.id
          },
          data: {
            lastLoginAt: new Date()
          }
        });

        await createAuditLog({
          action: AuditAction.LOGIN_SUCCESS,
          entityType: AuditEntityType.AUTH,
          actorId: user.id,
          entityId: user.id,
          description: `${user.name} entrou no sistema com sucesso.`
        });

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role as Role,
          unitId: user.unitId,
          mustChangePassword: user.mustChangePassword
        };
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.unitId = user.unitId;
        token.mustChangePassword = user.mustChangePassword;
      }

      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? "";
        session.user.role = (token.role as Role | undefined) ?? Role.RESIDENT;
        session.user.unitId = token.unitId ?? null;
        session.user.mustChangePassword = Boolean(token.mustChangePassword);
      }

      return session;
    }
  }
};
