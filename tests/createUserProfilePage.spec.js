// test.spec.js
import { test, expect } from "@playwright/test";
import { CreateUserProfilePage } from "../pages/CreateUserProfilePage";

// elements initialization
const createUserProfilePage = new CreateUserProfilePage(page);

test.describe("Create User Profile Page", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the application
    await createUserProfilePage.navigateTo();
  });
  // Test Case 1: Verify successful creation of a user profile
  // https://github.com/mloic47/BlueWindowQATest/wiki/Test-Case-1:-Verify-successful-creation-of-a-user-profile
  // test('Verify successful creation of a user profile', async ({ page }) => {

  // });

  // Test Case 2: Verify that a form can't be submitted without mandatory fields
  test("Verify that a form can't be submitted without mandatory fields", async ({
    page,
  }) => {
    // Click on the submit button without filling mandatory fields
    await homePage.clickSubmit();

    // Verify the error message
    page.once("dialog", (dialog) => {
      expect(dialog.message()).toBe("Please fill in all mandatory fields");
      dialog.dismiss().catch(() => {});
    });
  });
});
