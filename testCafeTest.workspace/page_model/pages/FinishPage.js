import {Selector} from 'testcafe'

class FinishPage{
    constructor(){
        this.titleBarFinish = Selector('.subheader')
    }
}

export default new FinishPage()