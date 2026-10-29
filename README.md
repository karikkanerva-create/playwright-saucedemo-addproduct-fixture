# Playwright Test Automation Project

This project demonstrates UI test automation using Playwright and TypeScript. The test verifies a shopping cart flow in the SauceDemo web application.

## Technologies

- Playwright Test
- TypeScript
- Node.js
- GitHub Actions
- JSON test data

## Project Structure

```text
playwright-saucedemo-addproduct-fixture/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── components/
│   └── HeaderComponent.ts
├── config/
│   └── dev.env              # Local environment file; excluded from Git
├── data/
│   ├── products.json
│   └── users.json
├── fixtures/
│   ├── auth.fixture.ts
│   └── test.fixture.ts
├── pages/
│   ├── CartPage.ts
│   ├── InventoryPage.ts
│   └── LoginPage.ts
├── tests/
│   └── addproduct.spec.ts
├── utils/
│   └── dataFactory.ts
├── package.json
├── package-lock.json
└── playwright.config.ts
```

## UI Test Scenarios

- Log in as the standard user
- Add a product to the shopping cart
- Verify that the product appears in the cart
- Remove the product
- Verify that the cart is empty

The test runs in Chromium, Firefox, and WebKit.

## Continuous Integration

GitHub Actions runs the Playwright tests on pushes and pull requests targeting the `main` or `master` branches. The workflow installs dependencies and browsers, runs the test suite, and uploads the HTML report as an artifact.

The local `config/dev.env` file is excluded from Git. Configure `BASE_URL` in the CI workflow or provide the environment file during the workflow before running the tests. The CD job shown in the workflow is commented out; deployment is not configured.

## Skills Demonstrated

- Playwright Test
- TypeScript
- End-to-end UI test automation
- Page Object Model (POM)
- Reusable Playwright fixtures
- Cross-browser testing
- Test data management with JSON
- GitHub Actions CI

## Installation

```bash
npm ci
npx playwright install
```

## Environment Configuration

Create a `config/dev.env` file in the project root:

```env
BASE_URL=https://www.saucedemo.com
HEADLESS=true
```

## Run All Tests

```bash
npx playwright test
```

## View Test Report

After running the tests, open the generated HTML report:

```bash
npx playwright show-report
```
