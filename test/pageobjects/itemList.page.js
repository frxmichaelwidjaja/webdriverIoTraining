const { $ } = require('@wdio/globals')
const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ItemListPage extends Page {
    /**
     * define selectors using getter methods
     */
    get titleH1 () {
        return $('//h1[contains(text(),"Smartphones & Smartwatches")]');
    }

    get cellPhoneAndSmartphoneBtn () {
        return $("//a[contains(text(),'Cell Phones & Smartphones')]");
    }
        
    get searchResultTitle () {
        return $$('//div[@class="s-item__title"]/span');
    }

    async clickCellPhonesSmartphonesButton () {
        await this.cellPhoneAndSmartphoneBtn.click();
    }
    
    async titleOfFirstSearchListContains(text){
        await expect(this.searchResultTitle[1]).toHaveTextContaining(text);
    }

    /**
    * overwrite specific options to adapt it to page object
    */
    open () {
    return super.open();
    }
}

module.exports = new ItemListPage();
