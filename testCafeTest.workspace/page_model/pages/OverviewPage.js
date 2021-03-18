import {Selector} from 'testcafe'

class OverviewPage{
    constructor(){
        this.titleBarOverview = Selector('.subheader')
        this.finishButton = Selector('.cart_button')
    }
}

export default new OverviewPage()