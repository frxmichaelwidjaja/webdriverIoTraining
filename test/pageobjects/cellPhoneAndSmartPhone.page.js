const { $ } = require('@wdio/globals')
const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CellPhoneAndSmartPhonePage extends Page {
    /**
     * define selectors using getter methods
     */
    get titleH1 () {
        return $("//span[contains(text(),'Cell Phones & Smartphones')]");
    }

    get allFilterBtn () {
        return $("//button[contains(text(),'All Filters')]");
    }

    get filterWindow () {
        return $("//body/div[@id='refineOverlay']//form");
    }

    
    get filterCondition () {
        return $("#c3-mainPanel-condition");
    }

    get optionNewCondition () {
        return $("#c3-subPanel-LH_ItemCondition_New_cbx");
    }

    get filterPrice () {
        return $("#c3-mainPanel-price");
    }

    get optionMinimumPriceTxtBox () {
        return $("//body/div[@id='refineOverlay']//fieldset[1]/ul[1]/li[1]/div[2]/div[1]/div[1]//input[1]");
    }
    get optionMaximumPriceTxtBox () {
        return $("//body/div[@id='refineOverlay']//fieldset[1]/ul[1]/li[1]/div[2]/div[1]/div[2]//input[1]");
    }

    get filterLocation () {
        return $("#c3-mainPanel-location");
    }

    get optionLocationInAsia () {
        return $("//body/div[@id='refineOverlay']/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/fieldset[1]/div[5]/span[1]/span[1]/input[1]");
    }

    get asiaTagFilter () {
        return $("//form[1]/div[1]/div[2]/div[2]/div[1]/div[1]/span[1]");
    }

    get priceTagFilter () {
        return $("//form[1]/div[1]/div[2]/div[2]/div[1]/div[1]/span[2]");
    }

    get newTagFilter () {
        return $("//form[1]/div[1]/div[2]/div[2]/div[1]/div[1]/span[3]");
    }

    get applyButton () {
        return $("//body/div[@id='refineOverlay']/div[2]/div[1]/form[1]/div[3]/div[2]/button[1]");
    }

    get filterAppliedTag () {
        return $("//body//section[1]/section[1]/ul[1]/li[1]/div[1]/button[1]/span[1]");
    }

    get asiaAppliedFilterTag () {
        return $("//section[1]/section[1]/ul[1]/li[1]/div[1]/div[1]/ul[1]/li[3]/a[1]");
    }

    get newAppliedFilterTag () {
        return $("//section[1]/section[1]/ul[1]/li[1]/div[1]/div[1]/ul[1]/li[1]/a[1]");
    }

    get priceAppliedFilterTag () {
        return $("//section[1]/section[1]/ul[1]/li[1]/div[1]/div[1]/ul[1]/li[2]/a[1]");
    }

    async scrollFilterBottom () {
        var filterList = $("//div[@class='x-overlay__wrapper--left']//div[@role='tab']");
        filterList.setValue("");
        browser.keys('End');
        browser.keys('Enter');
        $("//div[@class='x-overlay__wrapper--left']");
    }

    async clickAllFiltersButton () {
        await this.allFilterBtn.click();
    }

    async clickFilterConditionButton () {
        await this.filterCondition.click();
    }

    async setNewCondition () {
        await this.optionNewCondition.click();
    }
    
    async clickFilterPriceButton () {
        await this.filterPrice.click();
    }

    async setFilterPrice (value, priceType) {
        switch(priceType){
            case "Mininum Price":
                await this.optionMinimumPriceTxtBox.setValue(value);
                break;
            case "Maximum Price":
                await this.optionMaximumPriceTxtBox.setValue(value);
                break;
            default:
                // to be develop
                break;
        }
    }  
    async clickFilterLocationButton () {
        await this.filterLocation.click();
    }

    async setFilterLocation (locs) {
        switch(locs){
            case "Asia":
                await this.optionLocationInAsia.click();
                break
            default:
                // to be develop
                break
        }
    }
    
    async clickAllFiltersButton () {
        await this.allFilterBtn.click();
    }
    
    async clickApplyButton () {
        await this.applyButton.click();
    }

    async clickFilterAppliedTagButton () {
        await this.filterAppliedTag.click();
    }

    











    /**
    * overwrite specific options to adapt it to page object
    */
    open () {
    return super.open();
    }
}

module.exports = new CellPhoneAndSmartPhonePage();
