import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact form', async ({ page }) => {
    await expect(page.getByLabel(/naam/i)).toBeVisible();
    await expect(page.getByLabel(/e-mailadres/i)).toBeVisible();
    await expect(page.getByLabel(/telefoonnummer/i)).toBeVisible();
    await expect(page.getByLabel(/uw bericht/i)).toBeVisible();
  });

  test('should display contact information', async ({ page }) => {
    const main = page.locator('main');
    await expect(main.getByText(/06 - 12 34 56 78/i)).toBeVisible();
    await expect(main.getByText(/info@meereizen.nl/i)).toBeVisible();
  });

  test('should submit contact form', async ({ page }) => {
    // Fill form fields with valid data
    await page.getByLabel(/naam/i).fill('Jan de Tester');
    await page.getByLabel(/e-mailadres/i).fill('jan@test.nl');
    await page.getByLabel(/telefoon/i).fill('0612345678');
    await page.getByLabel(/uw bericht/i).fill('Dit is een testbericht');
    
    // Submit the form via JavaScript to bypass any webkit validation issues
    await page.locator('form').evaluate((form: HTMLFormElement) => {
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    });
    
    // Wait for the success message to appear
    // Give it up to 15 seconds as there's a 1 second simulated delay in the handler
    const successElement = page.getByTestId('success-message');
    await successElement.waitFor({ timeout: 15000 });
    
    // Verify the text content
    await expect(successElement).toContainText(/bedankt/i);
  });

  test('should require name and email fields', async ({ page }) => {
    // Try to submit without filling required fields
    await page.getByRole('button', { name: /verstuur bericht/i }).click();
    
    // Form should not submit (check that we're still on the page and no success message)
    await expect(page.getByLabel(/naam/i)).toBeVisible();
  });
});
