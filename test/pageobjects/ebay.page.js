const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EbayPage extends Page {
    /**
     * define selectors using getter methods
     */
    get shopByCategory () {
        return $('#gh-shop-a');
    }

    get electronics () {
        return $('//tbody/tr[1]/td[1]/h3[2]/a[1]');
    }

    get cellPhonesAndAccessories () {
        return $('//a[contains(text(),"Cell phones & accessories")]');
    }

    get btnSubmit () {
        return $('//input[@id="gh-btn"]');
    }
    
    
    get searchBar () {
        return $("//input[@id='gh-ac']");
    }

    get searchBarCategory () {
        return $('#gh-cat');
    }

    get SearchBtn () {
        return $('#gh-btn');
    }

    
    
    async clickShopByCategory () {
        await this.shopByCategory.click();
    }

    async clickCellPhonesAndAccessories () {
        await this.cellPhonesAndAccessories.click();
    }

    async searchItemInSearchBar (seachItem) {
        await this.searchBar.click();
        await this.searchBar.setValue(seachItem);
    }

    async setSearchCategorybar (seachItem) {
        await this.searchBarCategory.click();
        await this.searchBarCategory.selectByAttribute("value",seachItem);
    }
    
    async clickSearchBtn () {
        await this.SearchBtn.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new EbayPage();
