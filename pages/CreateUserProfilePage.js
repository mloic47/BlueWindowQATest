import { Page } from '@playwright/test';
import { config } from '../config';

export class CreateUserProfilePage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto(config.baseUrl);
  }

//   click on the submit button
  async clickSubmit() {
    await this.page.click('button[type="submit"]');
  }

  async getErrorMessage() {
    return await this.page.textContent('.error-message');
  }
}
