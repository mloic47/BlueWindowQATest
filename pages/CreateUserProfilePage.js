import { Page } from '@playwright/test';
import { config } from '../config';

export class CreateUserProfilePage {
  constructor(page) {
    this.page = page;
    // Define the selectors
    this.submitButton = 'input[type="submit"]';
  }

  async navigateTo() {
    await this.page.goto(config.baseUrl);
  }

  // Click on the submit button
  async clickSubmit() {
    await this.page.click(this.submitButton); // Fix: Use this.submitButton
  }

//   async getErrorMessage() {
//     return await this.page.textContent('.error-message');
//   }
}
