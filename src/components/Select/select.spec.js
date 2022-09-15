import { test, expect } from '@playwright/test';

test.describe('Select component', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:5173/');
	});

	test('should display select options', async ({ page }) => {
		await page.locator('[placeholder="Placeholder"]').first().click();
		await expect(await page.locator('.itemlist__options')).toBeVisible();
	});

	test('should select the clicked option', async ({ page }) => {
		await page.locator('[placeholder="Placeholder"]').first().click();
		const locator = await page.locator('.itemlist__options');
		await expect(locator).toBeVisible();
		await page.locator('ul:has-text("Option 1")').click();
		await expect(page.locator('.select:nth-child(1) input[type="text"]')).toHaveValue('Option 1');
	});
});
