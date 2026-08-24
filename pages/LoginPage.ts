import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}
  async open() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  }
  async login(username: string, password: string) {
    await this.open();
    const user = this.page.locator('[name = "username"]');
    const pass = this.page.locator('[name = "password"]');
    const loginButton = this.page.getByRole("button", { name: "Login" });
    await user.fill(username);
    await pass.fill(password);
    await loginButton.click();
  }
}
