import { Locator, Page } from '@playwright/test';
import { CookieModal } from '../components/cookieModal';
import { CookieWidget } from '../components/cookieWidget';

export class HomePage {
    private cookieModal: CookieModal;
    private cookieWidget: CookieWidget;
    private navbarLetsTalkBtn: Locator;

    constructor(private page: Page) {
        this.cookieModal = new CookieModal(page);
        this.cookieWidget = new CookieWidget(page);
        this.navbarLetsTalkBtn = page.locator(`a[class='navbar-button-hire is-hidden-mobile w-inline-block']`)
    }

    async goto() {
        await this.page.goto('https://www.stxnext.com/')
    }

    async acceptCookies() {
        await this.cookieModal.acceptAllCookies();
    }

    async isCookieModalHidden(): Promise<boolean> {
        return !(await this.cookieModal.isAcceptButtonVisible());
    }

    async openHireUsPage() {
        await this.navbarLetsTalkBtn.click();
    }
}
