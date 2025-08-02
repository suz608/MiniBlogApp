// Test about page
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

// Navigate to about page before each test
test.beforeEach(async ({ page }) => {
  await page.goto(`${baseUrl}/about-us`);
});

test.describe('About Page', () => {
  test('should load about page and check for specific element', async ({ page }) => {
    // Verify if a specific element exists on the page
    const element = page.locator('text=Welcome'); 
    await expect(element).toBeVisible();
  });
})
