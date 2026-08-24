import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { EmployeePage } from "../pages/EmployeePage";
import { EmployeeListPage } from "../pages/EmployeeListPage";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login("Admin", "admin123");
  const homePage = new HomePage(page);
  await homePage.openPimPage();
});

test("deve pesquisar funcionário pelo nome", async ({ page }) => {
  const employeeListPage = new EmployeeListPage(page);
  await employeeListPage.searchEmployeeByName("Ana");
  const userFounded = page.getByText("Ana").first();
  await expect(userFounded).toBeVisible();
});

test("deve resetar o formulário quando clicar no botão reset", async ({
  page,
}) => {
  const employeeListPage = new EmployeeListPage(page);
  await employeeListPage.resetSearchFields();
  const employeeName = page.getByPlaceholder("Type for hints...").first();
  await expect(employeeName).toHaveValue("");
});

test("deve exibir mensagem de erro quando o id for inválido", async ({
  page,
}) => {
  const employeeListPage = new EmployeeListPage(page);
  await employeeListPage.searchEmployeeById("9999995");
  const messageError = page.getByText("No Records Found").first();
  await expect(messageError).toBeVisible();
});
test("deve editar os dados do funcionário", async ({ page }) => {
  const employeeListPage = new EmployeeListPage(page);
  await employeeListPage.updateMiddleNameEmployee("Matos");
  const updatedData = page.locator(".oxd-toast-content--success");
  await expect(updatedData).toContainText("Successfully Updated");
});

test("deve deletar o funcionário com sucesso", async ({ page }) => {
  const employeeListPage = new EmployeeListPage(page);
  await employeeListPage.deleteEmployee();
  const employeeDeleted = page.locator(".oxd-toast-content--success");
  await expect(employeeDeleted).toContainText("Successfully Deleted");
});
