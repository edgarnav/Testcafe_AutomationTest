import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import PersonalInfoPage from '../pages/PersonalInfoPage'
import OverviewPage from '../pages/OverviewPage'
import { CREDENTIALS } from '../data/Constants'
import { USER_INFO } from '../data/Constants'
import { ASSERTS } from '../data/Constants'

fixture('Personal information feature tests').page `https://www.saucedemo.com/`

test('Continue with missing mail information', async t => {
    await t.typeText(LoginPage.userNameInput, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordInput, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(MainPage.addToCartButton)
        .click(MainPage.shoppingCartButton)
        .click(ShoppingCartPage.chechoutButton)
        .click(PersonalInfoPage.continueButton)

    await t.expect(PersonalInfoPage.errorButton.exists).ok()
})

test('Fill users information', async t => {
    await t.typeText(LoginPage.userNameInput, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordInput, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(MainPage.addToCartButton)
        .click(MainPage.shoppingCartButton)
        .click(ShoppingCartPage.chechoutButton)
        .typeText(PersonalInfoPage.firstnameInput, USER_INFO.FIRST_NAME)
        .typeText(PersonalInfoPage.lastnameInput, USER_INFO.LAST_NAME)
        .typeText(PersonalInfoPage.zipCodeInput, USER_INFO.ZIP_CODE)
        .click(PersonalInfoPage.continueButton)

    await t.expect(OverviewPage.titleBarOverview.innerText).eql(ASSERTS.TITLE_BAR_OVERVIEW)
})
