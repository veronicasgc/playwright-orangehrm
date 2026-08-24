import { expect, Page } from "@playwright/test";

export class EmployeePage {
  constructor(private page: Page) {}

  async addEmployee(name: string, middle: string, last: string) {
    const add = this.page.getByRole("link", { name: "Add Employee" });
    const firstName = this.page.locator('[name= "firstName"]');
    const middleName = this.page.locator('[name= "middleName"]');
    const lastName = this.page.locator('[name = "lastName"]');
    const saveButton = this.page.getByRole("button", { name: "Save" });

    await add.click();
    await firstName.fill(name);
    await middleName.fill(middle);
    await lastName.fill(last);
    await saveButton.click();
   
  }

  async getEmployeeId() {
    const employeeIdField = this.page.getByRole("textbox").nth(4);
    await expect(employeeIdField).toBeVisible();
    const employeeId = await employeeIdField.inputValue();
    
    return employeeId;
  }

  async addEmployeeWithLogin(
    name: string,
    middle: string,
    last: string,
    user: string,
    pass: string,
    confirmPass: string,
  ) {
    const add = this.page.getByRole("link", { name: "Add Employee" });
    const firstName = this.page.locator('[name= "firstName"]');
    const middleName = this.page.locator('[name= "middleName"]');
    const lastName = this.page.locator('[name = "lastName"]');
    const saveButton = this.page.getByRole("button", { name: "Save" });
    const activateButton = this.page.locator(".oxd-switch-input--active");
    const username = this.page.getByRole("textbox").nth(5);
    const password = this.page.getByRole("textbox").nth(6);
    const confirmPassword = this.page.getByRole("textbox").nth(7);

    await add.click();
    await firstName.fill(name);
    await middleName.fill(middle);
    await lastName.fill(last);

    await activateButton.click();
    await username.fill(user);
    await password.fill(pass);
    await confirmPassword.fill(confirmPass);

    await saveButton.click();
  }
}
