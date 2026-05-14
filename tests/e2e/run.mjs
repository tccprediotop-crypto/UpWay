import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { setTimeout as delay } from "node:timers/promises";

const e2eEnv = {
  ...process.env,
  AUTH_SECRET: "playwright-secret",
  DATABASE_PROVIDER: "sqlite",
  DATABASE_URL: "file:./e2e.db",
  NEXTAUTH_URL: "http://127.0.0.1:3100",
  PLAYWRIGHT_BASE_URL: "http://127.0.0.1:3100",
  PROPERTY_NAME: "Condominio Playwright"
};

const isWindows = process.platform === "win32";
const playwrightCli = fileURLToPath(new URL("../../node_modules/playwright/cli.js", import.meta.url));
const nextCli = fileURLToPath(new URL("../../node_modules/next/dist/bin/next", import.meta.url));

function runProcess(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: process.cwd(),
      env: e2eEnv,
      stdio: "inherit",
      ...options
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} ${args.join(" ")} exited with code ${code ?? "null"}`));
    });
  });
}

async function runNpmScript(script) {
  if (isWindows) {
    await runProcess("cmd.exe", ["/c", "npm.cmd", "run", script]);
    return;
  }

  await runProcess("npm", ["run", script]);
}

async function waitForServer(url, timeoutMs = 120_000) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(url, {
        redirect: "manual"
      });

      if (response.ok || response.status === 307 || response.status === 308) {
        return;
      }
    } catch {
      // Server is still starting.
    }

    await delay(1_000);
  }

  throw new Error(`Timed out waiting for ${url}`);
}

async function main() {
  await runNpmScript("db:reset:sqlite");
  await runNpmScript("build");

  const server = spawn(
    process.execPath,
    [nextCli, "start", "--port", "3100", "--hostname", "127.0.0.1"],
    {
      cwd: process.cwd(),
      env: e2eEnv,
      stdio: "inherit"
    }
  );

  try {
    await waitForServer("http://127.0.0.1:3100/login");
    await runProcess(process.execPath, [playwrightCli, "test", "--config", "playwright.config.ts"]);
  } finally {
    if (!server.killed) {
      server.kill("SIGTERM");
      await delay(1_000);

      if (!server.killed) {
        server.kill("SIGKILL");
      }
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
