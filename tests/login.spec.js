const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Authentication Showcase', () => {
  test('TC-SASE-001: Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to Login
    await loginPage.goto();

    // Step 2: Perform Login
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    // Step 3: Triple-Check Assertion (UI Feedback)
    const message = await loginPage.getFlashMessage();
    expect(message).toContain('You logged into a secure area!');
    
    // Evidence is automatically captured via playwright.config.js on failure
  });
});
