import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import { CREDENTIALS } from '../data/Constants'
import { ASSERTS } from '../data/Constants'

fixture('Login features tests').page `https://www.saucedemo.com/`

test('Login with a valid user', async t => {
    await t.typeText(LoginPage.userNameInput, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordInput, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(MainPage.titleBarMain.innerText).eql(ASSERTS.TITLE_BAR_MAIN)
})

test('Login with an invalid user', async t => {
    await t.typeText(LoginPage.userNameInput, CREDENTIALS.INVALID_USER.USERNAME)
        .typeText(LoginPage.passwordInput, CREDENTIALS.INVALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(LoginPage.errorButton.exists).ok()
})

test('Logout from products page', async t => {
    await t.typeText(LoginPage.userNameInput, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordInput, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(MainPage.menuButton)
        .click(MainPage.logoutOption)

    await t.expect(LoginPage.loginButton.exists).ok()
})