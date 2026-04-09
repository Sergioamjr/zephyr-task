import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  const el = page.getByTestId("tittlee");
  expect(el).toHaveText("Bem-vindo à nossa loja!!!");
  const card = page.getByTestId("product-c64837f5-5b7a-41d6-b4a2-1d23eda8f2ab");
  expect(card).toBeVisible();
  await card.click();
  await page.waitForURL("**/c64837f5-5b7a-41d6-b4a2-1d23eda8f2ab");
  const prodTitle = page.getByTestId("prod-title");
  await expect(prodTitle).toHaveText(/Black Ruffle Mini Dress/);
});
