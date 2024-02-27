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

    // Verify the error message
    const pageText = await page.textContent('html');
    expect(pageText).toContain(createUserProfilePageTestData.errorMessageText);
  });
});
