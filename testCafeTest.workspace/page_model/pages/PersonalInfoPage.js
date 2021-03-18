import {Selector} from 'testcafe'

class PersonalInfoPage{
    constructor(){
        this.firstnameInput = Selector('#first-name')
        this.lastnameInput = Selector("#last-name")
        this.zipCodeInput = Selector('#postal-code')
        this.continueButton = Selector('.cart_button')
        this.errorButton = Selector('.error-button')
    }
}

export default new PersonalInfoPage()