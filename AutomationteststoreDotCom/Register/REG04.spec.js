/* Copy and Paste to terminal to run test : 
npx playwright test REG04.spec.js --headed
*/

import { test, expect } from '@playwright/test';

test('Test if proper error messages are displayed when blank form is submitted', async ({ page }) => {

await page.goto('https://automationteststore.com/index.php?rt=account/login');
await page.getByRole('button', { name: ' Continue' }).click();

await page.getByLabel('I have read and agree to the').check();
await page.getByRole('button', { name: ' Continue' }).click();

await page.waitForTimeout(5000);

await expect(page.getByText('First Name must be between 1 and 32 characters!', { exact: true })).toBeVisible();

// Check that the error message for the last name is visible
await expect(page.getByText('Last Name must be between 1 and 32 characters!', { exact: true })).toBeVisible();

// Check that the error message for the email address is visible
await expect(page.getByText('Email Address does not appear to be valid!', { exact: true })).toBeVisible();

// Check that the error message for address 1 is visible
await expect(page.getByText('Address 1 must be between 3 and 128 characters!', { exact: true })).toBeVisible();

// Check that the error message for the city is visible
await expect(page.getByText('City must be between 3 and 128 characters!', { exact: true })).toBeVisible();

// Check that the error message for selecting a region/state is visible
await expect(page.getByText('Please select a region / state!', { exact: true })).toBeVisible();

// Check that the error message for the postal code is visible
await expect(page.getByText('Zip/postal code must be between 3 and 10 characters!', { exact: true })).toBeVisible();

// Check that the error message for the login name is visible
await expect(page.getByText('Login name must be alphanumeric only and between 5 and 64 characters!', { exact: true })).toBeVisible();

// Check that the error message for the password is visible
await expect(page.getByText('Password must be between 4 and 20 characters!', { exact: true })).toBeVisible();


await page.waitForTimeout(5000);


});