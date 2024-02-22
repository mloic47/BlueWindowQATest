// test.spec.js
import { test, expect } from "@playwright/test";

test.describe("Create User Profile Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://qa-assessment.pages.dev/");
  });
  // Test Case 1: Verify successful creation of a user profile
  // https://github.com/mloic47/BlueWindowQATest/wiki/Test-Case-1:-Verify-successful-creation-of-a-user-profile
  // test('Verify successful creation of a user profile', async ({ page }) => {

  // });

  // Test Case 2: Verify that a form can't be submitted without mandatory fields
  test("Verify that a form can't be submitted without mandatory fields", async ({
    page,
  }) => {
    // click on the submit button
    await page.getByRole("button", { name: "Submit" }).click();

    // Expect a dialog to be shown
    page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });

    // TODO: Expect message to be vague e.g "Please fill in the required fields"
    // await expect(page).toHaveText("Please fill in the required fields");
  });

// Test Case 3: Verify that all form elements are available
//   TODO: suggestion, Instead of mandatory and option texts, we can have * for mandatory fields and nothing for optional fields
   test('Verify that all form elements are available', async ({ page }) => {
    await page.getByRole('heading', { name: 'User Profile Creation' }).isVisible();
    await page.getByText('First Name (mandatory):').isVisible();
    await page.getByLabel('First Name (mandatory):').isVisible();
    await page.getByText('Last Name (mandatory):').isVisible();
    await page.getByText('Last Name (mandatory):').isVisible();
    await page.getByLabel('Last Name (mandatory):').isVisible();
    await page.getByText('Email (mandatory):').isVisible();
    await page.getByLabel('Email (mandatory):').isVisible();
    await page.getByText('Password (mandatory):').isVisible();
    await page.getByLabel('Password (mandatory):').isVisible();
    await page.getByText('Confirm Password (mandatory):').isVisible();
    await page.getByLabel('Confirm Password (mandatory):').isVisible();
    await page.getByText('Gender (optional):').isVisible();
    await page.getByLabel('Male', { exact: true }).isVisible();
    await page.getByText('Male', { exact: true }).isVisible();
    await page.getByLabel('Female').isVisible();
    await page.getByText('Female').isVisible();
    await page.getByLabel('Prefer not to say').isVisible();
    await page.getByText('Prefer not to say').isVisible();
    await page.getByText('Date ofBirth (optional):').isVisible();
    await page.getByText('Phone Number (optional):').isVisible();
    await page.getByLabel('Phone Number (optional):').isVisible();
    await page.getByText('Address (optioal):').isVisible();
    await page.getByLabel('Address (optioal):').isVisible();
    await page.getByText('LinkedIn URL (optional):').isVisible();
    await page.getByLabel('LinkedIn URL (optional):').isVisible();
    await page.getByText('GitHub URL (optional):').isVisible();
    await page.getByLabel('GitHub URL (optional):').isVisible();
    await page.getByRole('button', { name: 'Submit' }).isVisible();
   });
    

});
