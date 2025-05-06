import { Page, Locator, expect } from '@playwright/test';

export class CookieModal {
  private title: Locator;
  private acceptAllBtn: Locator;

  constructor(private page: Page) {
    this.title = page.getByText('This website uses cookies');
    this.acceptAllBtn = page.getByText('Allow all');
  }

  async isAcceptButtonVisible(): Promise<boolean> {
    return await this.acceptAllBtn.isVisible();
  }

  async acceptAllCookies() {
    if (await this.title.isVisible()) {
      await this.acceptAllBtn.click();
      await expect(this.acceptAllBtn).toBeHidden();
    }
  }
}
