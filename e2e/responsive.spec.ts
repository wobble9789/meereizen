import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  test('should be mobile-friendly on iPhone', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    await page.goto('/');
    
    await expect(page.getByRole('heading', { name: /reizen zonder gedoe/i })).toBeVisible();
    await expect(page.getByRole('navigation').getByRole('link', { name: /diensten/i })).toBeVisible();
  });

  test('should be mobile-friendly on Android', async ({ page }) => {
    await page.setViewportSize({ width: 412, height: 915 }); // Pixel 5
    await page.goto('/');
    
    await expect(page.getByRole('heading', { name: /reizen zonder gedoe/i })).toBeVisible();
    await expect(page.getByRole('navigation').getByRole('link', { name: /diensten/i })).toBeVisible();
  });

  test('should be tablet-friendly', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 }); // iPad
    await page.goto('/');
    
    await expect(page.getByRole('heading', { name: /reizen zonder gedoe/i })).toBeVisible();
    await expect(page.getByRole('navigation').getByRole('link', { name: /diensten/i })).toBeVisible();
  });

  test('should have readable text on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const heading = page.getByRole('heading', { name: /reizen zonder gedoe/i });
    const fontSize = await heading.evaluate(el => window.getComputedStyle(el).fontSize);
    
    // Font should be at least 24px on mobile for accessibility
    expect(parseInt(fontSize)).toBeGreaterThanOrEqual(24);
  });

  test('should have touch-friendly buttons on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const button = page.getByRole('link', { name: /bekijk onze diensten/i }).first();
    const box = await button.boundingBox();
    
    // Button should be at least 44x44 pixels (Apple's recommended touch target size)
    expect(box?.height).toBeGreaterThanOrEqual(44);
  });
});
