import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /reizen zonder gedoe/i })).toBeVisible();
  });

  test('should have navigation links', async ({ page }) => {
    const nav = page.getByRole('navigation');
    await expect(nav.getByRole('link', { name: /onze diensten/i })).toBeVisible();
    await expect(nav.getByRole('link', { name: /over ons/i })).toBeVisible();
    await expect(nav.getByRole('link', { name: /contact/i })).toBeVisible();
  });

  test('should display service cards', async ({ page }) => {
    await expect(page.getByText(/complete reizen/i)).toBeVisible();
    await expect(page.getByText(/vervoer & begeleiding/i)).toBeVisible();
    await expect(page.getByText(/tickets & arrangementen/i)).toBeVisible();
  });

  test('should have CTA buttons', async ({ page }) => {
    await expect(page.getByRole('link', { name: /bekijk onze diensten/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /neem contact op/i })).toBeVisible();
  });

  test('should navigate to services page', async ({ page }) => {
    await page.getByRole('link', { name: /bekijk onze diensten/i }).first().click();
    await expect(page).toHaveURL(/.*diensten/);
    await expect(page.locator('h1').filter({ hasText: /onze diensten/i })).toBeVisible();
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.getByRole('link', { name: /neem contact op/i }).first().click();
    await expect(page).toHaveURL(/.*contact/);
    await expect(page.locator('h1').filter({ hasText: /contact/i })).toBeVisible();
  });
});
