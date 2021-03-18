import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import { CREDENTIALS } from '../data/Constants'
import { ASSERTS } from '../data/Constants'

fixture('Shopping cart feature tests').page `https://www.saucedemo.com/`

test('Navigate to the shopping cart', async t => {
    await t.typeText(LoginPage.userNameInput, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordInput, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(MainPage.shoppingCartButton)

    await t.expect(ShoppingCartPage.titleBarShoppingCart.innerText).eql(ASSERTS.TITLE_BAR_SHOPPING_CART)
})

test('Add a single item to the shopping cart', async t => {
    await t.typeText(LoginPage.userNameInput, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordInput, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(MainPage.addToCartButton)
        .click(MainPage.shoppingCartButton)

    await t.expect(ShoppingCartPage.itemShoppingCart.exists).ok()
})

test('Add multiple items to the shopping cart', async t => {
    await t.typeText(LoginPage.userNameInput, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordInput, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(MainPage.addToCartButton)
        .click(MainPage.addToCartButton)
        .click(MainPage.addToCartButton)
        .click(MainPage.addToCartButton)
        .click(MainPage.shoppingCartButton)

    await t.expect(ShoppingCartPage.itemShoppingCart.exists).ok()
})
