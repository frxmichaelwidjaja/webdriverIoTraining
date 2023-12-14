const { $ } = require('@wdio/globals')
const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CellPhonesAndAccessoriesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get titleH1 () {
        return $('//h1[contains(text(),"Smartphones & Smartwatches")]');
    }

    get cellPhoneAndSmartphoneBtn () {
        return $("//a[contains(text(),'Cell Phones & Smartphones')]");
    }
        
    async clickCellPhonesSmartphonesButton () {
        await this.cellPhoneAndSmartphoneBtn.click();
    }
    
    /**
    * overwrite specific options to adapt it to page object
    */
    open () {
    return super.open();
    }
}

module.exports = new CellPhonesAndAccessoriesPage();
