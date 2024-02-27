import { test, expect } from "@playwright/test";
import { CreateUserProfilePage } from "../pages/CreateUserProfilePage";
import { createUserProfilePageTestData } from "../fixtues/createUserProfileTestData";
import { ReusableFunctions } from "../utils/ReusableFunctions";

let createUserProfilePage;
let reusableFunctions;

test.describe("Create User Profile Page", () => {
  test.beforeEach(async ({ page }) => {
    // Initialize the page object
    createUserProfilePage = new CreateUserProfilePage(page);
    // Initialize the reusable functions object
    reusableFunctions = new ReusableFunctions(page);
    // Navigate to the application
    await createUserProfilePage.navigateTo();
  });

  // Test Case 2: Verify that a form can't be submitted without mandatory fields
  test("Verify that a form can't be submitted without mandatory fields", async ({
    page,
  }) => {
    
    // Click on the submit button without filling mandatory fields
    await createUserProfilePage.clickSubmit();
    // assert dialog message are displayed
    await reusableFunctions.handleDialog(page, createUserProfilePageTestData.errorMessageText);
  });

  // Test Case 3: Verify that a form cannot be submitted with invalid email
  test("Verify that a form cannot be submitted with invalid email", async ({
    page,
  }) => {
    // Fill the email field with an invalid email
    await createUserProfilePage.fillEmail(createUserProfilePageTestData.errorEmailTestData);

    // Click on the submit button
    await createUserProfilePage.clickSubmit();

    await reusableFunctions.handleDialog(page, createUserProfilePageTestData.emailErrorMessageText); 

  });

  test("Verify that a form can be submitted with valid data", async () => {
    // Fill the email field with a valid email
    await createUserProfilePage.fillEmail(createUserProfilePageTestData.validEmailTestData);
    // Fill the first name field with a valid first name
    await createUserProfilePage.fillFirstName(createUserProfilePageTestData.validFirstNameTestData);
    // Fill the last name field with a valid last name
    await createUserProfilePage.fillLastName(createUserProfilePageTestData.validLastNameTestData);
    // Fill the password field with a valid password
    await createUserProfilePage.fillPassword(createUserProfilePageTestData.validPasswordTestData);
    // Fill the confirm password field with a valid password
    await createUserProfilePage.fillConfirmPassword(createUserProfilePageTestData.validPasswordTestData);
    // Click on the submit button
    await createUserProfilePage.clickSubmit();
  
  })
});
