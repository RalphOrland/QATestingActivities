/* Copy and Paste to terminal to run test : 
npx playwright test REG01.spec.js --headed
*/

import { test } from '@playwright/test';

test('Test if user can login with valid credentials', async ({ page }) => {

  await page.goto('https://automationteststore.com/index.php?rt=account/login');
  await page.getByRole('button', { name: ' Continue' }).click();

  await page.locator('#AccountFrm_firstname').fill('Test');
  await page.locator('#AccountFrm_lastname').fill('Test');
  await page.locator('#AccountFrm_email').fill('ralphtest@mailnesia.com');
  await page.locator('#AccountFrm_telephone').fill('2323442');
  await page.locator('#AccountFrm_fax').fill('32323');
  
  await page.locator('#AccountFrm_company').fill('n/a');
  await page.locator('#AccountFrm_address_1').fill('adress');
  await page.locator('#AccountFrm_address_2').fill('adress2');
  await page.locator('#AccountFrm_city').fill('city1');
  await page.locator('#AccountFrm_country_id').selectOption('168');
  await page.locator('#AccountFrm_zone_id').selectOption('2563');
  await page.locator('#AccountFrm_postcode').fill('4444');
  await page.locator('#AccountFrm_loginname').fill('Test');
  await page.locator('#AccountFrm_password').fill('Passw0rd!');
  await page.locator('#AccountFrm_confirm').fill('Passw0rd!');
  await page.getByLabel('I have read and agree to the').check();
  await page.getByRole('button', { name: ' Continue' }).click({timeout: 10000});

  await page.waitForTimeout(5000);

});
