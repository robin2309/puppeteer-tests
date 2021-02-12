const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://determined-albattani-861cc4.netlify.app/");
  await page.waitForSelector("input");
  await page.$eval("input", (el) => (el.value = "John"));
  await page.click("button.generateBtn");
  await page.waitForSelector(".generatedName");
  const myName = await page.evaluate(() => {
    const anchor = document.querySelector(".generatedName");
    return anchor.textContent;
  });
  console.log(myName);
  await browser.close();
})();
