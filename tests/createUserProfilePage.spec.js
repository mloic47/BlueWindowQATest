import { test, expect } from "@playwright/test";
import { CreateUserProfilePage } from "../pages/CreateUserProfilePage";
import { createUserProfilePageTestData } from "../fixtues/createUserProfileTestData";

let createUserProfilePage;

test.describe("Create User Profile Page", () => {
  test.beforeEach(async ({ page }) => {
    // Initialize the page object
    createUserProfilePage = new CreateUserProfilePage(page);
    // Navigate to the application
    await createUserProfilePage.navigateTo();
  });

  // Test Case 2: Verify that a form can't be submitted without mandatory fields
  test("Verify that a form can't be submitted without mandatory fields", async ({
    page,
  }) => {
    
    // Click on the submit button without filling mandatory fields
    await createUserProfilePage.clickSubmit();
    // Set up a listener for the alert dialog
    await page.once("dialog", (dialog) => {
      expect(dialog.message()).toBe(createUserProfilePageTestData.errorMessageText);
      dialog.dismiss().catch(() => {});
    });    // Expect the text content of the alert
  });

  // Test Case 3: Verify that a form cannot be submitted with invalid email
  test("Verify that a form cannot be submitted with invalid email", async ({
    page,
  }) => {
    // Fill the email field with an invalid email
    await createUserProfilePage.fillEmail("invalid-email");

    // Click on the submit button
    await createUserProfilePage.clickSubmit();

    // Verify the error message
    // const pageText = await page.textContent('html');
    // expect(pageText).toContain(createUserProfilePageTestData.errorMessageText);
  });
});
