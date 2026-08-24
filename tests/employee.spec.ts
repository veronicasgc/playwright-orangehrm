import { test, expect } from "@playwright/test";
import { EmployeePage } from "../pages/EmployeePage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login("Admin", "admin123");
  const homePage = new HomePage(page);
  await homePage.openPimPage();
});

//ADD EMPLOYEE
test("deve preencher o formulário e adicionar um novo funcionário", async ({
  page,
}) => {
  const employeePage = new EmployeePage(page);
  await employeePage.addEmployee("Ana", "Teixeira", "Monte");
  const employeerAdded = page.locator(".orangehrm-edit-employee-name h6");
  await employeerAdded.waitFor();
  await expect(employeerAdded).toContainText("Ana Monte");
});
test("deve retornar erro quando o nome não for preenchido", async ({
  page,
}) => {
  const employeePage = new EmployeePage(page);
  await employeePage.addEmployee("", "Teixeira", "Monte");
  const messageError = page.getByText("Required");
  await expect(messageError).toContainText("Required");
});
test("deve retornar erro quando o sobrenome não for preenchido", async ({
  page,
}) => {
  const employeePage = new EmployeePage(page);
  await employeePage.addEmployee("Ana", "Teixeira", "");
  const messageError = page.getByText("Required");
  await expect(messageError).toContainText("Required");
});

//ADD EMPLOYEE AND CREATE LOGIN DETAILS
test("deve criar funcionário com login", async ({ page }) => {
  const employeePage = new EmployeePage(page);
  const username = `janaina${Date.now()}`;
  await employeePage.addEmployeeWithLogin(
    "Janaina",
    "Matos",
    "Damião",
    username,
    "janaina123",
    "janaina123",
  );
  const employeeAdded = page.locator(".orangehrm-edit-employee-name h6");
  await expect(employeeAdded).toBeVisible({ timeout: 15000 });
  await expect(employeeAdded).toContainText("Janaina Damião");
});
test("deve exibir erro quando username estiver vazio", async ({ page }) => {
  const employeePage = new EmployeePage(page);
  await employeePage.addEmployeeWithLogin(
    "Matheus",
    "Oliveira",
    "Santos",
    "",
    "matheus123",
    "matheus123",
  );
  const messageError = page.getByText("Required");
  await expect(messageError).toBeVisible();
});
test("deve exibir erro quando password estiver vazio", async ({ page }) => {
  const employeePage = new EmployeePage(page);
  await employeePage.addEmployeeWithLogin(
    "Matheus",
    "Oliveira",
    "Santos",
    "Matheus",
    "",
    "matheus123",
  );
  const messageError = page.getByText("Required");
  await expect(messageError).toBeVisible();
});
test("deve exibir erro quando confirm password estiver vazio", async ({
  page,
}) => {
  const employeePage = new EmployeePage(page);
  await employeePage.addEmployeeWithLogin(
    "Matheus",
    "Oliveira",
    "Santos",
    "Matheus",
    "matheus123",
    "",
  );
  const messageError = page.getByText("Required");
  await expect(messageError).toBeVisible();
});

test("deve exibir erro quando confirm password for diferente de password", async ({
  page,
}) => {
  const employeePage = new EmployeePage(page);
  await employeePage.addEmployeeWithLogin(
    "Matheus",
    "Oliveira",
    "Santos",
    "Matheus",
    "matheus123",
    "Math123",
  );
  const messageError = page.getByText("Passwords do not match");
  await expect(messageError).toBeVisible();
});
