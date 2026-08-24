import { Page } from "@playwright/test";

export class EmployeeListPage {
  constructor(private page: Page) {}

  async openEmployeeList() {
    const employeeList = this.page.getByRole("link", { name: "Employee List" });
    await employeeList.click();
  };

  async searchEmployeeByName(name: string) {
    const employeeName = this.page
      .getByPlaceholder("Type for hints...")
      .first();
    const searchButton = this.page.getByRole("button", { name: "Search" });
    await employeeName.fill(name);
    await searchButton.click();
  };
  async resetSearchFields() {
    const resetButton = this.page.getByRole("button", { name: "Reset" });
    await resetButton.click();
  };

  async searchEmployeeById(id:string){
    const idField = this.page.getByRole('textbox').nth(2)
    await idField.fill(id)
    const searchButton = this.page.getByRole("button", {name: "Search"})
    await searchButton.click()
  };

  async updateMiddleNameEmployee (name: string){
    const editEmployee = this.page.locator(".bi-pencil-fill").first()
    await editEmployee.click()
    const editField = this.page.getByRole("textbox", {name: "Middle Name"})
    await editField.fill(name)
    const saveButton = this.page.getByRole("button", {name: "Save"})
    await saveButton.click()
  };

  async deleteEmployee (){
    const deleteEmployee = this.page.locator(".bi-trash").first()
    await deleteEmployee.click()
    const deleteConfirm = this.page.getByRole("button", {name: "Yes, Delete"})
    await deleteConfirm.click()
  }

}
