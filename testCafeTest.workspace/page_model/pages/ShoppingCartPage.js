import {Selector} from 'testcafe'

class ShoppingCartPage{
    constructor(){
        this.titleBarShoppingCart = Selector('.subheader')
        this.itemShoppingCart = Selector(".cart_item")
        this.chechoutButton = Selector(".checkout_button")
    }
}

export default new ShoppingCartPage()