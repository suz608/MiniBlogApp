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

test.describe('Test Sign up Page', () => {
  // Test if sign up works
  test('should sign up a new user', async ({ page }) => {
    // Navigate to signup page
    await page.goto(`${baseUrl}/sign-up`);

    // Fill in the signup form
    await page.fill('#username', 'testuser');
    await page.fill('#email', 'testuser@example.com');
    await page.fill('#password', 'password123');
    await page.fill('#confirm password', 'password123');

    // Submit the form
    await page.click('button[type="submit"]');

    // Verify that the user is redirected to the profile page
    await expect(page).toHaveURL(`${baseUrl}/profile`);
  });
});