import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CookieWidget } from '../components/cookieWidget';
import { HireUsPage } from '../pages/HireUsPage';

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.acceptCookies();
});

test('cookies can be withdrawn using widget', async ({ page }) => {
  const cookieWidget = new CookieWidget(page);

  await cookieWidget.expandCookieWidget();
  expect(await cookieWidget.isWithdrawalBtnDisabled()).toBeFalsy();
  await cookieWidget.withdrawYourConsent();
  expect(await cookieWidget.isWithdrawalBtnDisabled());
});

test('open hire us page', async ({ page }) => {
  const homePage = new HomePage(page);
  const hireUsPage = new HireUsPage(page);

  await homePage.openHireUsPage();
  await hireUsPage.fillForm();
});