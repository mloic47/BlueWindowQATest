# Automated Testing with Playwright | Blue Window QA Assessment

This repository contains automated tests written using Playwright to validate the functionality of a web application for creating user profiles. The tests cover various scenarios outlined in the provided user story and test cases.

## Setup Instructions

To set up and run the automated tests locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd repository name
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```
    
3. **Configure test environment:**
    - `config.json` specifies the URL of the application under test and any other necessary configurations to be added.


4. **Run the tests:**

Run test on UI
    ```bash
    npx playwright test --ui
    ```

## Project Structure

The project structure follows the Page Object Model (POM) design pattern for organizing test automation code:

- **`tests/`**: Contains test scripts written using Playwright to automate test cases.
- **`pages/`**: Contains page objects representing different pages of the web application.
- **`config.json`**: Configuration file for specifying test environment settings.
- **`package.json`**: Node.js package configuration file with dependencies and scripts.
- **`utils/`**: Contains utility functions used across the test scripts.
- **`Fixtures/`**: Contains text to be asserted and test data to be used across the test scripts.

## Test Reports

After running the tests, detailed test reports will be generated in HTML format. These reports provide insights into the execution status of each test case, including passed and failed scenarios.
