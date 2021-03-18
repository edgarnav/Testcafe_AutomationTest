import {Selector} from 'testcafe'

class MainPage{
    constructor(){
        this.titleBarMain = Selector('.product_label')
        this.menuButton = Selector('#react-burger-menu-btn')
        this.logoutOption = Selector('#logout_sidebar_link')
        this.shoppingCartButton = Selector('.fa-shopping-cart')
        this.addToCartButton = Selector ('.btn_primary')
    }
}

export default new MainPage()
