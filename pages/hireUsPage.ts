import { Locator, Page } from '@playwright/test';
import { CookieModal } from '../components/cookieModal';
import { CookieWidget } from '../components/cookieWidget';

export class HireUsPage {
    private title: Locator;
    private companyEmailInput: Locator;
    private companyNameInput: Locator;
    private phoneNumberPicklist: Locator;

    constructor(private page: Page) {
        this.title = page.getByText('Tell us about your project');
        this.companyEmailInput = page.locator(`input[name='email']`);
        this.companyNameInput = page.locator(`input[name='company']`);
        this.phoneNumberPicklist = page.locator(`select[id^='phone']`);
    }

    async fillForm() {
        await this.companyEmailInput.fill('random@random.com');
        await this.companyNameInput.fill('random');
        await this.phoneNumberPicklist.selectOption({ value: 'NE' });
    }
}
