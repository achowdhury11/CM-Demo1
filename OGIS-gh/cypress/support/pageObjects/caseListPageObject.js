// https://nationalarchives--ogiscat.sandbox.lightning.force.com/lightning/o/Contact/list?filterName=Recent
// This page is reached by clicking the top level "Cases" --> "All OGIS Cases" menu   -Testcase: View all Cases - W-001022
//  
class caseListPageObject
{
    getAllOgisCasesMenuItem() {
        return cy.xpath('//span[contains(text(),"All OGIS Cases")]')
    }
    getCaseListPageTitle()
    {
        return cy.xpath('//span[@class="triggerLinkText selectedListView slds-page-header__title slds-truncate slds-p-right--xx-small uiOutputText"]')
    }
    getCaseNumberAttribute() {
        return cy.xpath('(//*[@title="Case Number"][text()="Case Number"])[1]')  // span[title="Case Number"]
    }
    getSubjectAttribute() {
        return cy.xpath('(//*[text()="Subject"])[1]')
    }
    getStatusAttribute() {
        return cy.xpath('(//*[text()="Status"])[1]')  
    }
    getCaseOwnerAliasAttribute() {
        return cy.xpath('(//*[@title="Case Owner Alias"][text()="Case Owner Alias"])[1]')   
    }
    getListViewControlDropdown() {
        return cy.xpath('(//div[@title="List View Controls"]//lightning-primitive-icon[2])[1]')   // button[title="List View Controls"]
    }
    getListViewControlNewOption() {
        return cy.xpath('//li[@class="slds-dropdown__item listViewSettingsMenuNew"]//a[@role="menuitem"]')
    }
    /*
    getFilterButton() {
        return cy.xpath('//button[@title="Hide filters"]')
    }
    */
    getFilterButton() {
        return cy.xpath('//div[@class="filterLabel"]')
    }
    // getDefaultFilter() {
    //     return cy.xpath('a[class="trigger"]')
    // }   
    getDefaultFilter() {
        return cy.xpath('//div[@class="filterLabel"]') //a[class="trigger"]

    }
    getFilterByOwnerDialogLabel() {
        return cy.xpath('//legend[@class="inputLabel"]') // 
    }
    getFilterDialog() {
        return cy.xpath('//div[@class="scopeSelector forceFilterPanelScopeEditor"]//fieldset') 
    }
    getAllCasesOption() {
        return cy.xpath('(//span[@class="slds-radio_faux"])[1]') 
    }
    getCaseSearchField() {
        return cy.xpath('(//input)[2]') 
        //(//input)[2]  [placeholder="Search this list..."] [name="Case-search-input"] or //input[@aria-label="Search All OGIS Cases list view."]
    }
    getCaseRecordDownArrow() {
        return cy.xpath('(//tr[1]//td[6])[1]')    
        //tagname[normalize-space(@attribute/ function) = 'value']  - //a[normalize-space(@title)="Show 2 more actions"]
    }
    getCaseRecordEditLink() {
        return cy.xpath('//a[@title="Edit"]')   
    }
    getCaseNumberLink() {
        return cy.xpath('//tbody/tr[1]/td[3]/span[1]/div[1]/div[1]/div[1]/a[1]')  
    }
    getListSaveButton() {
        return cy.xpath('//button//span[text()="Done"]')
    }
    getStatusField()
    {
        return cy.xpath('//tbody/tr[1]/td[4]')
    }
    getCaseRecordHeader()
    {
        return cy.xpath('(//div/table/tbody/tr[1]/th/span/a)[1]')
    }
    getFirstCaseLink() {
        return cy.xpath('(//div/table/tbody/tr[1]')
    }
    getCaseListPageBodyArea() {
        return cy.xpath('//div[@class="slds-grid slds-media__body"]')
    }
    getFirstCaseLink() {
        return cy.xpath('(//tbody/tr[1]/th[1])//a[@data-refid="recordId"]')   // (//tbody/tr[1]/th[1])//a
    }
    getFirstCaseCheckbox() {
        return cy.xpath('(//tbody/tr[1]/td[2])[@role="gridcell"]')
    }
    getSecondCaseLink() {
        return cy.xpath('(//tbody/tr[2]/th[1]//a)[1]')
    }
    getPrintableViewButtonLink() {
        return cy.xpath('//div[@title="Printable View"]')
    }
    getPrintPageLink() {
        return cy.xpath('//a[text()="Print This Page"]')
    }
    //   

} 
export default caseListPageObject;