import { Page, Locator, expect } from '@playwright/test';

export class CookieWidget {
  private title: Locator;
  private acceptAllBtn: Locator;
  private withdrawConsentBtn: Locator;
  private cookieWidgetBtn: Locator;
  private closeWidget: Locator;

  constructor(private page: Page) {
    this.title = page.getByText('Cookie settings');
    this.acceptAllBtn = page.getByText('Allow all');
    this.withdrawConsentBtn = page.locator(`button[id='CookiebotWidget-btn-withdraw']`);
    this.cookieWidgetBtn = page.locator(`button[aria-label='Open widget']`);
    this.closeWidget = page.locator(`button[aria-label='Close widget']`);
  }

  async withdrawYourConsent() {
    await this.withdrawConsentBtn.click();
  }

  async isWithdrawalBtnDisabled() {
    await this.withdrawConsentBtn.isDisabled();
  }

  async expandCookieWidget() {
    await this.cookieWidgetBtn.click();
  }

  async closeCookieWidget() {
    await this.closeWidget.click();
  }
}
