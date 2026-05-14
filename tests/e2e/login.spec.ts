import { expect, test } from "playwright/test";

test("exibe a tela de login com caminhos reais de cadastro", async ({ page }) => {
  await page.goto("/login");

  await expect(page.getByText("Entrar no UpWay")).toBeVisible();
  await expect(page.getByRole("button", { name: "Entrar no sistema" })).toBeVisible();
  await expect(page.getByText("Criar conta de morador")).toBeVisible();
  await expect(page.getByText("Criar primeira conta da portaria")).toBeVisible();
});

test("permite criar a primeira conta da portaria e entrar no painel", async ({ page }) => {
  const suffix = Date.now();
  const email = `porteiro.${suffix}@upway.app`;
  const password = "Portaria123";

  await page.goto("/cadastro/porteiro");
  await page.locator('input[name="name"]').fill("Lucas Ferreira");
  await page.locator('input[name="email"]').fill(email);
  await page.locator('input[name="phone"]').fill("(11) 99999-0000");
  await page.locator('input[name="jobTitle"]').fill("Porteiro Lider");
  await page.locator('input[name="password"]').fill(password);
  await page.locator('input[name="confirmPassword"]').fill(password);
  await page.getByRole("button", { name: "Criar primeira conta da portaria" }).click();

  await expect(page).toHaveURL(/login/);
  await expect(page.getByText("A primeira conta da portaria foi criada com sucesso.")).toBeVisible();

  await page.locator('input[type="email"]').fill(email);
  await page.locator('input[type="password"]').fill(password);
  await page.getByRole("button", { name: "Entrar no sistema" }).click();

  await expect(page).toHaveURL(/porteiro\/dashboard/);
  await expect(page.getByText("Painel do Porteiro")).toBeVisible();
});

test("permite criar conta de morador e acessar o proprio painel", async ({ page }) => {
  const suffix = Date.now();
  const email = `morador.${suffix}@upway.app`;
  const password = "Morador123";

  await page.goto("/cadastro/morador");
  await page.locator('input[name="name"]').fill("Fernanda Rocha");
  await page.locator('input[name="email"]').fill(email);
  await page.locator('input[name="phone"]').fill("(11) 99999-9999");
  await page.locator('input[name="towerName"]').fill("Bloco A");
  await page.locator('input[name="unitNumber"]').fill("1203");
  await page.locator('input[name="floor"]').fill("12");
  await page.locator('input[name="password"]').fill(password);
  await page.locator('input[name="confirmPassword"]').fill(password);
  await page.getByRole("button", { name: "Criar conta de morador" }).click();

  await expect(page).toHaveURL(/login/);
  await expect(page.getByText("Sua conta de morador foi criada com sucesso.")).toBeVisible();

  await page.locator('input[type="email"]').fill(email);
  await page.locator('input[type="password"]').fill(password);
  await page.getByRole("button", { name: "Entrar no sistema" }).click();

  await expect(page).toHaveURL(/morador\/dashboard/);
  await expect(page.getByText("Ola, Fernanda")).toBeVisible();
});
