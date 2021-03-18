import {Selector} from 'testcafe'

class LoginPage{
    constructor(){
        this.userNameInput = Selector('input[name="user-name"]')
        this.passwordInput = Selector('input[name="password"]')
        this.loginButton = Selector('.btn_action')
        this.errorButton = Selector('.error-button')
    }
}

export default new LoginPage()