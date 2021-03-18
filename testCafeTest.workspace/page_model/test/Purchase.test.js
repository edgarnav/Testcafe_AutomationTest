import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import PersonalInfoPage from '../pages/PersonalInfoPage'
import OverviewPage from '../pages/OverviewPage'
import FinishPage from '../pages/FinishPage'
import { CREDENTIALS } from '../data/Constants'
import { USER_INFO } from '../data/Constants'
import { ASSERTS } from '../data/Constants'

fixture('Purchase feature tests').page `https://www.saucedemo.com/`

test('Complete a purchase', async t => {
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
        .click(OverviewPage.finishButton)

    await t.expect(FinishPage.titleBarFinish.innerText).eql(ASSERTS.TITLE_BAR_FINISH)
})
