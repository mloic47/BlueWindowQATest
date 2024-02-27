import { Page } from '@playwright/test';
import { config } from '../config';

export class CreateUserProfilePage {
  constructor(page) {
    this.page = page;
    // Define the selectors
    this.submitButton = 'input[type="submit"]';
    this.emailField = 'input[name="email"]';
    this.firstNameField = 'input[name="firstName"]';
    this.lastNameField = 'input[name="lastName"]';
    this.passwordField = 'input[name="password"]';
    this.confirmPasswordField = 'input[name="confirmPassword"]';
  }

  async navigateTo() {
    await this.page.goto(config.baseUrl);
  }

  // Click on the submit button
  async clickSubmit() {
    await this.page.click(this.submitButton); // Fix: Use this.submitButton
  }

    // Fill the email field
    async fillEmail(email) {
        await this.page.fill(this.emailField, email);
    }

    // Fill the first name field
    async fillFirstName(firstName) {
        await this.page.fill(this.firstNameField, firstName);
    }

    // Fill the last name field
    async fillLastName(lastName) {
        await this.page.fill(this.lastNameField, lastName);
    }

    // Fill the password field
    async fillPassword(password) {
        await this.page.fill(this.passwordField, password);
    }

    // Fill the confirm password field
    async fillConfirmPassword(confirmPassword) {
        await this.page.fill(this.confirmPasswordField, confirmPassword);
    }

//   async getErrorMessage() {
//     return await this.page.textContent('.error-message');
//   }
}
