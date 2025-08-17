import { expect, test } from "@playwright/test";
import { ContactPage } from "../pageObjects/contact.po.js"; 
const testData =require('../fixtures/contactFixtures.json');

test.beforeEach(async({page})=>{
    await page.goto('/');
})

test.describe('Valid contact tests', () => {
    test('Valid Contact',async ({page}) => {
        const contact=new ContactPage(page);
        await login.contact(
            testData.validContact.FirstName,
            testData.validContact.LastName,
            testData.validContact.DateofBirth,
            testData.validContact.Email,
            testData.validContact.Phone,
            testData.validContact.StreetAddress1,
            testData.validContact.StreetAddress2,
            testData.validContact.City,
            testData.validContact.State,
            testData.validContact.StreetAddress2,
            testData.validContact.City,
            test.validContact.StateofProvience,
            testData.validContact.PostalCode,
            testData.validContact.postalCode,
            testData.validContact.Country,
            testData.validContact.Country
        );
        await login.verifyValidContact();
    });
})