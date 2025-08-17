const { expect } = require("@playwright/test"); 

exports.ContactPage = class ContactPage {
  constructor(page) {
    this.page = page; 

    this.usernameInput = "#email";
    this.passwordInput = '//input[@placeholder="Password"]';
    this.loginButton = '//button[@id="submit"]';
    this.contactButton = '//button[@id="add-contact"]';
    this.firstName = '//input[@id="firstName"]';
    this.lastName = '//input[@id="lastName"]';
    this.dateofBirth = '//input[@id="birthdate"]';
    this.email = '//input[@id="email"]';
    this.phone = '//input[@id="phone"]';
    this.street1 = '//input[@id="street1"]';
    this.street2 = '//input[@id="street2"]';
    this.city = '//input[@id="city"]';
    this.stateProvince = '//input[@id="stateProvince"]';
    this.postalCode = '//input[@id="postalCode"]';
    this.country = '//input[@id="country"]';
    this.submitButton = '//button[@id="submit"]';
    this.cancelButton = '//button[@id="cancel"]';
    this.confirmContact = '//p[contains(text(),"Click on any contact to view the Contact Details")]';
  }

  async login(username, password) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }

  async addContact(
    FirstName,
    LastName,
    DateofBirth,
    Email,
    Phone,
    StreetAddress1,
    StreetAddress2,
    City,
    State,
    PostalCode,
    Country
  ) {
    await this.page.locator(this.contactButton).click();
    await this.page.locator(this.firstName).fill(FirstName);
    await this.page.locator(this.lastName).fill(LastName);
    await this.page.locator(this.dateofBirth).fill(DateofBirth);
    await this.page.locator(this.email).fill(Email);
    await this.page.locator(this.phone).fill(Phone);
    await this.page.locator(this.street1).fill(StreetAddress1);
    await this.page.locator(this.street2).fill(StreetAddress2);
    await this.page.locator(this.city).fill(City);
    await this.page.locator(this.stateProvince).fill(State);
    await this.page.locator(this.postalCode).fill(PostalCode);
    await this.page.locator(this.country).fill(Country);
    await this.page.locator(this.submitButton).click();
  }

  async verifyValidContact() {
    const confirmContact = this.page.locator(this.confirmContact);
    await expect(confirmContact).toHaveText(
      "Click on any contact to view the Contact Details"
    );
  }
};
