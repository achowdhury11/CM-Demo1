//  https://nationalarchives--ogiscat.sandbox.lightning.force.com/lightning/r/Case/5003S0000073DsCQAU/view
//  Page is displayed after a New Case is created. Case fields can be modified in this page.

class casePageObject
{
    getCaseView()
    {
        return cy.get('div[class="contentArea fullheight"]')
    }

    getEditStatusButton()
    {
        return cy.xpath("//button[@title='Edit Status']")
    }
    getFocusedEditStatusButton()
    {
        return cy.xpath('//button[@aria-label="Status, Open"]')
    }
    getStatusValue()  {
        return cy.xpath('//*[@data-value="Closed"]')
    }
    getSaveButton()  {
        return cy.xpath('//button[@name="SaveEdit"]')
    }
    getCancelButton()  {
        return cy.xpath('//button[@name="CancelEdit"]')
    }
    getContactDownArrow()  {
        return cy.xpath('//one-app-nav-bar-item-root[@class="navItem slds-context-bar__item slds-shrink-none slds-is-active"]')
    }
    getCaseHeader()  {
        return cy.xpath('((//span[text()="Cases"])[2]//following::span[@data-aura-class="uiOutputText"])[1]')
    }
        ////span[contains(text(),'New Contact')]
    // getCaseListSearchField()  {
    //     return cy.xpath('//input[@placeholder="Search this list..."]')
    // }
    getCaseHeader()  {
        return cy.xpath('((//span[text()="Cases"])[2]//following::span[@data-aura-class="uiOutputText"])[1]')
        } 
    
    getNewDateValue() {
        return cy.xpath('(//lightning-formatted-text[@data-navigation="enable"][normalize-space()])[2]')
    }
    getDateClosed() {
        return cy.xpath(' (//span[text()="Date Closed"]//following::span)[1]')
    }
    // getEditStatusButton() {
    //     return cy.xpath('(//button[@title="Edit Status"])[2]')
    // }
    getCaseNumberFieldValue() {
        return cy.xpath('(//lightning-formatted-text[@data-output-element-id="output-field"])[1]')
    }
    getCaseQueueValue() {
        return cy.xpath('(//lightning-formatted-text[@data-output-element-id="output-field"])[3]')
    }
    getCaseOwnerName() {
        return cy.xpath('(//lightning-formatted-text[@data-output-element-id="output-field"])[24]')
    }
    getCaseSubStatus() {
        return cy.xpath('(//lightning-formatted-text[@data-output-element-id="output-field"])[13]')
    }
    getCaseOfiginValue() {
        return cy.xpath('(//lightning-formatted-text[@data-output-element-id="output-field"])[12]')
    }
    getCaseStatus() {
        return cy.xpath('(//lightning-formatted-text[@data-output-element-id="output-field"])[23]')
    }
    // this locator is not used - instead cy.contains() was used to check
    getCaseClosedStatusValue() {
        return cy.xpath('(//lightning-formatted-text[text()="Closed"])[2]')
         //span[@class="test-id__field-label"][normalize-space()="Status"])[2]//following::lightning-formatted-text[1][text()]
    }
    getCaseOwnerEmail() {
        return cy.xpath('(//a[@class="emailuiFormattedEmail"])[3]')
    }
    getCaseFileUploadLink1() {
        return cy.xpath('(//span[@class="slds-file-selector__button slds-button slds-button_neutral"][normalize-space()="Upload Files"])[2]') 
    }
    getCaseFileUploadLink() {
        return cy.xpath('//lightning-input/div/div/lightning-primitive-file-droppable-zone/slot/input') 
        //  input[type="file"][name="fileInput"]
         //span[@class="slds-file-selector__button slds-button slds-button_neutral"]//lightning-primitive-icon' - or -  // (//span[@title="Files"])[2]//following::input[1]
           //span[@class="slds-file-selector__text slds-medium-show"]  --  //span[text()="Or drop files"] -- input[name="fileInput"]
        }
    getUploadFileDialogHeader() {
        return cy.xpath('//h2[text()="Upload Files"]') 
    }
    getDialogSaveButton() {
        return cy.xpath('//button//span[text()="Done"]')
    }
    getViewAllFilesLink() {
        return cy.xpath('//article[@class="slds-card slds-card_boundary headerBottomBorder forceRelatedListCardDesktop"]//a//span[@class="view-all-label"]')
        
        //a//span[@class="view-all-label"])[2]
    }
    getFilesHeader() {
        return cy.xpath('//h1[@title="Files"]')
    }    
    getOwnerInformationLink() {
        return cy.xpath('//table//tr//td[2]')
    }
    getLastModifiedInfo() {
        return cy.xpath('//table//tr//td[3]')
    }
    getFileSizeInfo() {
        return cy.xpath('//table//tr//td[4]')
    }
    getFilesDropdown() {
        //   
        return cy.xpath('//span[@title="Source"]//following::a[4]')  //a[@title="Show 7 more actions"]
        // (//span[@class="slds-icon_container slds-icon-utility-down"]//span[1])[1]
          //tbody/tr[1]/td[6]/span[1]/div[1]/a[1]/span[1]/span[1]
    }  
    getFilesDeleteLink() {
        return cy.xpath('(//a[@title="Delete"])[1]')   //  (//a//div[text()="Delete"])[1]
    }
    getFileDeleteButton() {
        return cy.xpath('//span[text()="Delete"]')
    }


    

}
export default casePageObject;