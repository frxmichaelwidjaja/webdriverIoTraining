const { expect } = require('@wdio/globals')
const EbayPage = require('../pageobjects/ebay.page')
const CellPhonesAndAccessoriesPage = require('../pageobjects/cellPhonesAndAccessories.page')
const CellPhoneAndSmartPhonePage = require('../pageobjects/cellPhoneAndSmartPhone.page')

const ItemListPage = require('../pageobjects/itemList.page')

describe('Ebay Test Automation', () => {

    it('Access an item via category with multiple filters', async () => {
        /*Open www.ebay.com*/
        await EbayPage.open()
        browser.maximizeWindow()
        /*Navigate to Search by category*/
        await EbayPage.clickShopByCategory()
        await expect(EbayPage.electronics).toBeExisting()
        await expect(EbayPage.cellPhonesAndAccessories).toBeExisting()
        await EbayPage.clickCellPhonesAndAccessories()
        /*Click Cell Phones & Smartphones in side navigation section.*/
        await expect(CellPhonesAndAccessoriesPage.titleH1).toBeExisting()
        await expect(CellPhonesAndAccessoriesPage.cellPhoneAndSmartphoneBtn).toBeExisting()
        await CellPhonesAndAccessoriesPage.clickCellPhonesSmartphonesButton()
        /*Click – All Filters*/
        await expect(CellPhoneAndSmartPhonePage.titleH1).toBeExisting()
        await expect(CellPhoneAndSmartPhonePage.allFilterBtn).toBeExisting()
        await CellPhoneAndSmartPhonePage.clickAllFiltersButton()
        /*Add 3 filters from the pop-up and click apply.*/
        await expect(CellPhoneAndSmartPhonePage.filterWindow).toBeExisting()
        await CellPhoneAndSmartPhonePage.scrollFilterBottom()
        await expect(CellPhoneAndSmartPhonePage.filterCondition).toBeExisting()
        await expect(CellPhoneAndSmartPhonePage.filterPrice).toBeExisting()
        await expect(CellPhoneAndSmartPhonePage.filterLocation).toBeExisting()
        await CellPhoneAndSmartPhonePage.clickFilterConditionButton()
        await CellPhoneAndSmartPhonePage.setNewCondition()
        await CellPhoneAndSmartPhonePage.clickFilterPriceButton()
        await CellPhoneAndSmartPhonePage.setFilterPrice('0', 'Mininum Price')
        await CellPhoneAndSmartPhonePage.setFilterPrice('1000000', 'Maximum Price')
        await CellPhoneAndSmartPhonePage.clickFilterLocationButton()
        await CellPhoneAndSmartPhonePage.setFilterLocation('Asia')
        await expect(CellPhoneAndSmartPhonePage.asiaTagFilter).toBeExisting()
        await expect(CellPhoneAndSmartPhonePage.newTagFilter).toBeExisting()
        await expect(CellPhoneAndSmartPhonePage.priceTagFilter).toBeExisting()
        await CellPhoneAndSmartPhonePage.clickApplyButton()
        /*Verify that the filter tags are applied.*/
        await expect(CellPhoneAndSmartPhonePage.filterAppliedTag).toBeExisting()
        await CellPhoneAndSmartPhonePage.clickFilterAppliedTagButton()
        await expect(CellPhoneAndSmartPhonePage.asiaAppliedFilterTag).toBeExisting()
        await expect(CellPhoneAndSmartPhonePage.newAppliedFilterTag).toBeExisting()
        await expect(CellPhoneAndSmartPhonePage.priceAppliedFilterTag).toBeExisting()
    })
    
    it('Find a product via Search', async () => {
        /*Open www.ebay.com*/
        await EbayPage.open()
        browser.maximizeWindow()
        /*Type any search string in the search bar. For example: ROG.*/
        await expect(EbayPage.searchBar).toBeExisting()
        await EbayPage.searchItemInSearchBar('ROG')
        //58058 is value for option "Computers/Tablets & Networking"
        await EbayPage.setSearchCategorybar(58058)
        /*Change the Search category and click Search.*/
        await EbayPage.clickSearchBtn()
        /*Verify that the page loads completely.*/
        //await expect(ItemListPage.computerTabletsNetworkingLabel).toBeExisting()
        await expect(browser).toHaveUrlContaining('ROG')
        /*Verify that the first result name matches with the search string.*/
        await ItemListPage.titleOfFirstSearchListContains('ROG')
    })


})

