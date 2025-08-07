const{expect} = require('@playwright/test');
exports.ContactPage = class ContactPage {
    constructor(page){
       this.contactButton='//button[@id="add-contact"]';
       this.firstName='//input[@id="firstName"]';
       this.lastName='//input[@id="lastName"]';
       this.dateofBirth='//input[@id="birthdate"]';
       this.email='//input[@id="email"]';
       this.phone='//input[@id="phone"]';
       this.street1='//input[@id="street1"]';
       this.street2='//input[@id="street2"]';
       this.city='//input[@id="city"]';
       this.stateProvince='//input[@id="stateProvince"]';
       this.postalCode='//input[@id="postalCode"]';
       this.country='//input[@id="country"]';
       this.submitButton='//button[@id="submit"]';
       this.cancleButton='//button[@id="cancel"]';
    }
}