import { Page } from "@playwright/test";

export class HomePage{
    constructor(private page:Page){}
    
  async openPimPage(){
    // const menu = this.page.locator(".oxd-topbar-header-hamburger")
    const pim = this.page.getByRole("link", {name:"PIM"})
    // await menu.click()
    await pim.click()
  }
}