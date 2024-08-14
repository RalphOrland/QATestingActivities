/* Copy and Paste to terminal to run test : 
npx playwright test REG02.spec.js --headed
*/

import { test } from '@playwright/test';

test('Test if user can register with missing required fields (e.g., email, password)', async ({ page }) => {

  await page.goto('https://automationteststore.com/index.php?rt=account/login');
  await page.getByRole('button', { name: ' Continue' }).click();

  await page.getByLabel('I have read and agree to the').check();
  await page.getByRole('button', { name: ' Continue' }).click();

  await page.waitForTimeout(7000);

});
