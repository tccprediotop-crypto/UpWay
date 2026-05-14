import {
  PrismaClient as PostgresPrismaClient,
  type Prisma as PostgresPrisma
} from "@/generated/postgres-client";
import { PrismaClient as SqlitePrismaClient } from "@/generated/sqlite-client";

import { createPostgresAdapter, createSqliteAdapter } from "@/lib/prisma-adapter";

type AppPrismaClient = PostgresPrismaClient;

const globalForPrisma = globalThis as unknown as {
  prisma?: AppPrismaClient;
};

function resolveDatabaseProvider() {
  const explicitProvider = process.env.DATABASE_PROVIDER?.toLowerCase();

  if (explicitProvider) {
    return explicitProvider;
  }

  const databaseUrl = process.env.DATABASE_URL?.toLowerCase() ?? "";

  if (
    databaseUrl.startsWith("postgresql://") ||
    databaseUrl.startsWith("postgres://")
  ) {
    return "postgresql";
  }

  return "sqlite";
}

function createClient(): AppPrismaClient {
  const log: PostgresPrisma.LogLevel[] =
    process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"];
  const provider = resolveDatabaseProvider();

  if (provider === "postgresql" || provider === "postgres") {
    return new PostgresPrismaClient({
      adapter: createPostgresAdapter(),
      log
    });
  }

  return new SqlitePrismaClient({
    adapter: createSqliteAdapter(),
    log
  }) as unknown as AppPrismaClient;
}

export const prisma = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
