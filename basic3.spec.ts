import { test, expect } from '@playwright/test';

test('test with typescript day', async ({ page }) => {
  await page.goto('https://tsday.ng-bolivia.org');
  const title = page.locator('h1');
  await page.screenshot({
    path: `screenshotTSDay.png`,
  })
  await expect(title).toHaveText('TypeScript Day');
});
