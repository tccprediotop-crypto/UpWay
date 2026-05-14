import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

function hasPrefix(value: string, prefixes: string[]) {
  const normalizedValue = value.toLowerCase();

  return prefixes.some((prefix) => normalizedValue.startsWith(prefix));
}

function resolvePoolMax() {
  const rawValue = process.env.DATABASE_POOL_MAX?.trim();

  if (!rawValue) {
    return process.env.VERCEL ? 1 : 10;
  }

  const parsedValue = Number.parseInt(rawValue, 10);

  if (!Number.isFinite(parsedValue) || parsedValue <= 0) {
    throw new Error(
      "DATABASE_POOL_MAX invalida. Use um numero inteiro maior que zero."
    );
  }

  return parsedValue;
}

export function createPostgresAdapter() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error(
      "DATABASE_URL nao configurada para o provider postgresql."
    );
  }

  if (!hasPrefix(connectionString, ["postgresql://", "postgres://"])) {
    throw new Error(
      "DATABASE_URL invalida para o provider postgresql. Use uma conexao postgres:// ou postgresql://."
    );
  }

  return new PrismaPg({
    connectionString,
    max: resolvePoolMax()
  });
}

export function createSqliteAdapter() {
  const url = process.env.DATABASE_URL ?? "file:./dev.db";

  if (!hasPrefix(url, ["file:"])) {
    throw new Error(
      "DATABASE_URL invalida para o provider sqlite. Use file:./dev.db ou ajuste DATABASE_PROVIDER."
    );
  }

  return new PrismaBetterSqlite3({
    url
  });
}
