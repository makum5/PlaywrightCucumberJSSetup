const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const  loginPage  = require('../pages/loginPage');
const data = require("../../resources/TestData/data.json");



Given('User navigates to the application', { timeout: 100 * 1000 }, async function () {
    await this.page.goto(data.pageURL);
});

Given('User click on the login link', async function () {
    await loginPage.clickOnLoginButton(this.page);
});

Given('User enter the username as {string}', async function (username) {
    await loginPage.enterUserName(this.page, username);
});


Given('User enter the password as {string}', async function (password) {
    await loginPage.enterPassword(this.page, password);
});


When('User click on the login button', async function () {
    await loginPage.clickOnSignInButton(this.page);
});

When('Login should fail', async function () {
    const alertElement = this.page.locator(loginPage.txtLoginErrorLocator);
    await expect(alertElement).toHaveText("Username or Password is incorrect.");
});

Then('Login should be success {string}', async function (username) {
    const user = this.page.locator(loginPage.txtLoggedInUserLocator);
    console.log(await user.textContent());
    await expect(user).toContainText(username);
});