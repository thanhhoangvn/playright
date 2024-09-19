import { test, expect } from '@playwright/test';

test('has login', async ({ page }) => {
  await page.goto('https://manspo.deha.vn');
  const locator = page.locator('.btn-login');
  // Expect a title "to contain" a substring.
  await expect(locator).toHaveText(/Đăng nhập/);
});

test('login account success', async ({ page }) => {
    await page.goto('https://manspo.deha.vn');
    const login = await page.locator('a.btn-login');

    await login.click();

    const loginModal = page.locator('#modalLogin');

    await expect(loginModal).toBeVisible();

    await loginModal.locator('input[name="login"]').fill('hoangndt23');
    await loginModal.locator('input[name="password"]').fill('hoang123');

    const loginButton = loginModal.locator('button[type="submit"]');
    await loginButton.click();

    const tfaLogin = page.locator('#modalAuthenticationLogin');

    await expect(tfaLogin).toBeVisible();
});