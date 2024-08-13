/*
Run : 
*/ 

import { test, expect } from '@playwright/test';

test('Test if user can login with valid credentials', async({ page, context }) => {

  await page.goto('https://automationteststore.com/index.php?rt=account/login');
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.locator('#AccountFrm_lastname').click();
  await page.locator('#AccountFrm_lastname').fill('Test');
  await page.locator('#AccountFrm_email').click();
  await page.locator('#AccountFrm_email').fill('ralphtest@mailnesia.com');
  await page.locator('#AccountFrm_telephone').click();
  await page.locator('#AccountFrm_telephone').fill('2323442');
  await page.locator('#AccountFrm_fax').fill('32');
  await page.locator('#AccountFrm_fax').click();
  await page.locator('#AccountFrm_fax').fill('32323');

  test.setTimeout(10000);

  // --------------------
  await browser.close();

});