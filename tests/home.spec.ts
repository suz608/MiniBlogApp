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

test.beforeEach(async ({ page }) => {
  await page.goto(`${baseUrl}`);
});

// Test homepage
test.describe('Home Page', () => {

    test('should load homepage and check for title', async ({ page }) => {
      await expect(page).toHaveTitle("Vite App");
    });

    test('should load homepage and check for specific element', async ({ page }) => {
      // Verify if a specific element exists on the page
      const element = page.locator('text=DailyThoughts'); 
      await expect(element).toBeVisible();
    });

})
