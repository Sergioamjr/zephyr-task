import { test, expect } from "@playwright/test";

test("home page", async ({ page }) => {
  await page.goto("/");
  const el = page.getByTestId("page_title");
  await expect(el).toHaveText("Our Products");

  // products
  const cards = page.getByTestId(/product-/);
  await expect(cards).toHaveCount(15);
});

test("visit a product", async ({ page }) => {
  await page.goto("/");

  // products
  const card = page.getByTestId("product-c64837f5-5b7a-41d6-b4a2-1d23eda8f2ab");
  expect(card).toBeVisible();
  await card.click();
  await page.waitForURL("**/c64837f5-5b7a-41d6-b4a2-1d23eda8f2ab");
  const prodTitle = page.getByTestId("prod-title");
  const pageTitle = page.getByTestId("page_title");
  await expect(pageTitle).toHaveText(/Product > Black Ruffle Mini Dress/);
  await expect(prodTitle).toHaveText(/Black Ruffle Mini Dress/);

  // Check header checkout button update
  const checkoutBtn = page.getByTestId("checkout-link");
  await expect(checkoutBtn).toHaveText("Checkout");

  // Add to cart
  const addToCartBtn = page.getByTestId("add-to-cart-btn");
  await expect(addToCartBtn).toBeVisible();
  await addToCartBtn.click();

  await expect(checkoutBtn).toHaveText("Checkout (1)");

  // remove from cart
  const removeFromCartBtn = page.getByTestId("remove-from-cart-btn");
  await expect(removeFromCartBtn).toBeVisible();
  await removeFromCartBtn.click();

  await expect(checkoutBtn).toHaveText("Checkout");
});

test("add to the cart", async ({ page }) => {
  await page.goto("/");

  // products
  const card = page.getByTestId("product-c64837f5-5b7a-41d6-b4a2-1d23eda8f2ab");
  expect(card).toBeVisible();
  await card.click();
  await page.waitForURL("**/c64837f5-5b7a-41d6-b4a2-1d23eda8f2ab");

  // Add to cart
  const addToCartBtn = page.getByTestId("add-to-cart-btn");
  await expect(addToCartBtn).toBeVisible();
  await addToCartBtn.click();

  // go to the checkout page
  const goToCheckoutBtn = page.getByTestId("go-to-checkout-btn");
  await expect(goToCheckoutBtn).toBeVisible();
  await goToCheckoutBtn.click();
  await page.waitForURL("**/checkout");

  const checkoutTitle = page.getByTestId("page_title");
  await expect(checkoutTitle).toHaveText("Checkout");

  const prodQuantity = page.getByTestId("total_quantity");
  const prodPrice = page.getByTestId("total_price");
  await expect(prodQuantity).toHaveText("1");
  await expect(prodPrice).toHaveText("$119.99");

  // add more 2 products
  const addMoreBtn = page.getByTestId(
    "increase-quantity-c64837f5-5b7a-41d6-b4a2-1d23eda8f2ab",
  );
  await expect(addMoreBtn).toBeVisible();
  await addMoreBtn.click();
  await addMoreBtn.click();

  await expect(prodQuantity).toHaveText("3");
  await expect(prodPrice).toHaveText("$359.97");

  // Clear the cart
  const clearCartBtn = page.getByTestId("clear-cart-btn");
  await expect(clearCartBtn).toBeVisible();
  await clearCartBtn.click();

  const emptyCartMessage = page.getByTestId("empty-cart");
  await expect(emptyCartMessage).toContainText("Your cart is empty.");
});

test("create an order", async ({ page }) => {
  await page.goto("/");

  // products
  const card = page.getByTestId("product-c64837f5-5b7a-41d6-b4a2-1d23eda8f2ab");
  expect(card).toBeVisible();
  await card.click();
  await page.waitForURL("**/c64837f5-5b7a-41d6-b4a2-1d23eda8f2ab");

  // Add to cart
  const addToCartBtn = page.getByTestId("add-to-cart-btn");
  await expect(addToCartBtn).toBeVisible();
  await addToCartBtn.click();

  // go to the checkout page
  const goToCheckoutBtn = page.getByTestId("go-to-checkout-btn");
  await expect(goToCheckoutBtn).toBeVisible();
  await goToCheckoutBtn.click();

  const checkoutTitle = page.getByTestId("page_title");
  await expect(checkoutTitle).toHaveText("Checkout");

  const payButton = page.getByTestId("pay-btn");
  await expect(payButton).toBeVisible();
  await payButton.click();
  await expect(payButton).toBeDisabled();
  await expect(payButton).toHaveText("Processing...");
  const processingAnimation = page.getByTestId("processing-animation");
  await expect(processingAnimation).toBeVisible();

  const paidAnimation = page.getByTestId("paid-animation");
  await expect(paidAnimation).toBeVisible();

  const successMessage = page.getByTestId("order-created");
  await expect(successMessage).toBeVisible();
  await expect(successMessage).toHaveText("Order created successfully!");

  // go to the order page
  const orderPageButton = page.getByTestId("go-to-orders-btn");
  await expect(orderPageButton).toBeVisible();
  await orderPageButton.click();
  await page.waitForURL("**/orders");

  const orderTitle = page.getByTestId("page_title");
  await expect(orderTitle).toHaveText("Orders");

  const orderId = page.getByTestId(/order-id-/);
  await expect(orderId).toBeVisible();
  const prodOrder = page.getByTestId(/order-.*-product-/);
  await expect(prodOrder).toBeVisible();
  await expect(prodOrder).toContainText(/Black Ruffle Mini Dress/);
});

test("navigation", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("home-link").click();
  await page.waitForURL("**/");
  await page.getByTestId("products-link").click();
  await page.waitForURL("**/");
  await page.getByTestId("orders-link").click();
  await page.waitForURL("**/orders");
  await page.getByTestId("checkout-link").click();
  await page.waitForURL("**/checkout");
});

test("product not found product", async ({ page }) => {
  await page.goto("/bla-bla");
  const notFoundMessage = page.getByTestId("not-found");
  await expect(notFoundMessage).toBeVisible();
  await expect(notFoundMessage).toHaveText("Product not found.");
});
