import { test, expect } from "@playwright/test";

test.describe("Home Page Tests", () => {
  test("renders Home page", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await expect(page.locator("nav")).toBeVisible();
  });

  test("checks if Hero section is visible", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await expect(page.locator("main")).toBeVisible();
  });

  test("checks if Body is visible", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await expect(page.locator("body")).toBeVisible();
  });

  test("checks if Footer is visible", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await expect(page.locator("footer")).toBeVisible();
  });
});
