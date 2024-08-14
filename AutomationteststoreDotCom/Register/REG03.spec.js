/* Copy and Paste to terminal to run test : 
npx playwright test REG03.spec.js --headed
*/

import { test } from '@playwright/test';
import { generateRandomEmail } from './config.js';

test('Test if user can proceed with registration with email input only', async ({ page }) => {

  const randomEmail = generateRandomEmail();

  await page.goto('https://automationteststore.com/index.php?rt=account/login');
  await page.getByRole('button', { name: ' Continue' }).click();

  await page.locator('#AccountFrm_email').fill(randomEmail);
 
  await page.getByLabel('I have read and agree to the').check();
  await page.getByRole('button', { name: ' Continue' }).click();

  await page.waitForTimeout(7000);

});