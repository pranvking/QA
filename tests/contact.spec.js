import { expect, test } from "@playwright/test";
import { ContactPage } from "../pageObjects/contact.po.js"; 
const testData = require('../fixtures/contactFixtures.json');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Valid contact tests', () => {
  test('Valid Contact', async ({ page }) => {
    const contact = new ContactPage(page);


    await contact.login("pranavkarmacharya@gmail.com", "pranavkarmacharya123");


    await contact.addContact(
      testData.validContact.FirstName,
      testData.validContact.LastName,
      testData.validContact.DateofBirth,
      testData.validContact.Email,
      testData.validContact.Phone,
      testData.validContact.StreetAddress1,
      testData.validContact.StreetAddress2,
      testData.validContact.City,
      testData.validContact.StateofProvience, 
      testData.validContact.postalCode,     
      testData.validContact.Country
    );

    await contact.verifyValidContact();
  });
});
