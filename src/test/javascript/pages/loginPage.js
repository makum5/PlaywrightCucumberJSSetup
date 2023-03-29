const btnloginButtonLocator = "//span[text()='Login']";
const inputUsernameLocator = "//input[@formcontrolname='username']";
const inputPasswordLocator = "//input[@formcontrolname='password']";
const btnSignInLocator = "//button[@color='primary']";
const txtLoginErrorLocator = "//mat-error[@role='alert']";
const txtLoggedInUserLocator = "//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]//span[1]";

async function clickOnLoginButton(page) {
    await page.click(btnloginButtonLocator)
}

async function enterUserName(page, username) {
    await page.locator(inputUsernameLocator).type(username);
}

async function enterPassword(page, password) {
    await page.locator(inputPasswordLocator).type(password);
}

async function clickOnSignInButton(page) {
    await page.click(btnSignInLocator);
}

module.exports = {
    btnloginButtonLocator,
    inputUsernameLocator,
    inputPasswordLocator,
    btnSignInLocator,
    txtLoginErrorLocator,
    txtLoggedInUserLocator,
    clickOnLoginButton,
    enterUserName,
    enterPassword,
    clickOnSignInButton
};