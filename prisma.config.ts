import "dotenv/config";
import { defineConfig, env } from "prisma/config";

const databaseUrl = process.env.DIRECT_DATABASE_URL ?? env("DATABASE_URL");
const shadowDatabaseUrl =
  process.env.SHADOW_DATABASE_URL ??
  process.env.DIRECT_DATABASE_URL ??
  process.env.DATABASE_URL;

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    seed: "tsx prisma/seed.ts"
  },
  datasource: {
    url: databaseUrl,
    shadowDatabaseUrl
  }
});
