const {After, Before ,AfterStep, BeforeStep, Status} = require('@cucumber/cucumber');
const playwright = require('@playwright/test');

Before(async function () {
    this.browser = await playwright.chromium.launch({
        headless:false
    });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  });
  
  AfterStep( async function ({result}) {
    if (result.status === Status.FAILED) {
      await this.page.screenshot({path: 'test-results/failed/screenshot.png'});
    }
  });