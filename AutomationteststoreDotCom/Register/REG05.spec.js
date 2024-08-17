/* Copy and Paste to terminal to run test : 
npx playwright test REG05.spec.js --headed
*/

import { test, expect } from '@playwright/test';
import { generateRandomUsername, generateRandomEmail } from './config.js';

test('Test if all data input from user is retained after submitting with missing info', async ({ page }) => {

  const randomUsername = generateRandomUsername(12);
  const randomEmail = generateRandomEmail();

  await page.goto('https://automationteststore.com/index.php?rt=account/login');
  await page.getByRole('button', { name: ' Continue' }).click();

  await page.locator('#AccountFrm_firstname').fill('Test');
  await page.locator('#AccountFrm_lastname').fill('Test');

  await page.locator('#AccountFrm_email').fill(randomEmail);

  await page.locator('#AccountFrm_telephone').fill('2323442');
  await page.locator('#AccountFrm_fax').fill('32323');
  
  await page.locator('#AccountFrm_company').fill('n/a');
  await page.locator('#AccountFrm_address_1').fill('adress');
  await page.locator('#AccountFrm_address_2').fill('adress2');
  await page.locator('#AccountFrm_city').fill('city1');
  await page.locator('#AccountFrm_country_id').selectOption('168');
  await page.locator('#AccountFrm_zone_id').selectOption('2563');
  await page.locator('#AccountFrm_postcode').fill('4444');
  await page.locator('#AccountFrm_loginname').fill('tested'); 

  const password = 'Passw0rd!';
  await page.locator('#AccountFrm_password').fill(password);
  await page.locator('#AccountFrm_confirm').fill(password); 

  await page.getByLabel('I have read and agree to the').check();
  await page.getByRole('button', { name: ' Continue' }).click();

  await page.waitForTimeout(3000);
  
  await expect(page.locator('#AccountFrm_firstname')).toHaveValue('Test');
  await expect(page.locator('#AccountFrm_lastname')).toHaveValue('Test');
  await expect(page.locator('#AccountFrm_email')).toHaveValue(randomEmail);
  await expect(page.locator('#AccountFrm_telephone')).toHaveValue('2323442');
  await expect(page.locator('#AccountFrm_fax')).toHaveValue('32323');
  await expect(page.locator('#AccountFrm_company')).toHaveValue('n/a');
  await expect(page.locator('#AccountFrm_address_1')).toHaveValue('adress');
  await expect(page.locator('#AccountFrm_address_2')).toHaveValue('adress2');
  await expect(page.locator('#AccountFrm_city')).toHaveValue('city1');
  await expect(page.locator('#AccountFrm_country_id')).toHaveValue('168');
  await expect(page.locator('#AccountFrm_zone_id')).toHaveValue('2563');
  await expect(page.locator('#AccountFrm_postcode')).toHaveValue('4444');
  await expect(page.locator('#AccountFrm_loginname')).toHaveValue('tested');

  /*await expect(page.locator('#AccountFrm_password')).toHaveJSProperty('value', password);
  await expect(page.locator('#AccountFrm_confirm')).toHaveJSProperty('value', password);*/
  await page.waitForTimeout(5000);

});
