import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Retrieve the base URL from the environment variable
const baseUrl = process.env.BASE_URL;

// Ensure baseUrl is available (optional: handle if it's missing)
if (!baseUrl) {
  throw new Error('BASE_URL is not defined in .env file');
}

test.describe('Test Login Page', () => {

  // Navigate to login page before each test
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseUrl}/login`);
  });

  // Test if login works
  test('should log in a user', async ({ page }) => {
    // Fill in the login form
    await page.fill('#email', 'user03@mail.com');
    await page.fill('#password', '12345678');

    // Submit the form
    await page.click('button[type="submit"]');

    // Verify that the user is redirected to the profile page
    await expect(page).toHaveURL(`${baseUrl}/profile`);
  });

  // Test Homepage button
  test('should have a homepage button', async ({ page }) => {
    // Verify that homepage button exists
    await expect(page.getByRole("link", { name: "Homepage" })).toBeVisible();
  });

  test('should redirect to homepage on click', async ({ page }) => {
    // Click on the homepage link
    await page.getByRole("link", { name: "Homepage" }).click();

    // Verify redirection
    await expect(page).toHaveURL(`${baseUrl}`);
  });
});
