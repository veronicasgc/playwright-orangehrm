import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("login com sucesso", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const myActions = page.getByText("My Actions");
  await loginPage.login("Admin", "admin123");
  await expect(page).toHaveURL(/dashboard/);
  await expect(myActions).toBeVisible();
});

test("deve exibir uma mensagem de erro quando a senha for inválida", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const messageError = page.getByRole("alert");
  await loginPage.login("Admin", "senha123");
  await expect(messageError).toBeVisible();
  await expect(messageError).toContainText("Invalid credentials");
});

test("deve exibir uma mensagem de erro quando o username for inválido", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const messageError = page.getByRole("alert");
  await loginPage.login("user", "admin123");
  await expect(messageError).toBeVisible();
  await expect(messageError).toContainText("Invalid credentials");
});

test("quando o password está vazio, o sistema informa ao usuário que o campo é obrigatório.", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const messagemError = page.getByText("Required");
  await loginPage.login("Admin", "");
  await expect(messagemError).toContainText("Required");
});

test("quando o username está vazio, o sistema informa ao usuário que o campo é obrigatório", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const messagemError = page.getByText("Required");
  await loginPage.login("", "admin123");
  await expect(messagemError).toContainText("Required");
});

test("quando username e password não são preenchidos, o sistema informa ao usuário que é obrigatório o preenchimento dos dois campos", async({page})=>{
  const loginPage = new LoginPage(page);
  const messagemError = page.getByText("Required");
  await loginPage.login("", "");
  await expect(messagemError).toHaveCount(2)
})