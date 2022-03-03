import { chromium, webkit, firefox } from "playwright";

for (const browserType of [chromium, webkit, firefox]) {
  console.log("running", browserType.name());
  const browser = await browserType.launch();
  const page = await browser.newPage();
  await page.goto("https://msn.com");
  await page.screenshot({
    path: `screenshot-${browserType.name()}.png`,
  })
  await browser.close();
}