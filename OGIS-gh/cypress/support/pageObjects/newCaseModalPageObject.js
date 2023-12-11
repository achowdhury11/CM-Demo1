class newCaseModalPageObject
{
    
  getModalHeading()
    {
       // return cy.get('.modal-container.slds-modal__container .slds-modal__header h2')
       return cy.get(".isModal.inlinePanel.oneRecordActionWrapper button[name='CancelEdit']")
       
    }
    getCaseText()
    {
      return cy.contains('New Case: OGIS')
    }
    
    // // Case_SubCategory Available listbox
    getCaseSubCategory()
    {
       // Case SubCategory dropdown
       return cy.xpath("//span[text()='Agency Practices']")
       
    }
   getMoveCaseSubcategoryArrow()
    {
         return cy.xpath("//span[text()='Agency Practices']//following::button[1]")
    }

    getCaseQueue()
    {
         return cy.xpath("//button[@aria-label='Case Queue, Simple']")
    }

    getCaseCaseQueueSelection()
    {
      return cy.xpath('//*[@data-value="Standard"]')
      
    }
    getCaseCategory()
    {
      return cy.xpath("//button[@aria-label='Case Category, --None--']")
    }
    getCaseCategorySelection()
    {
      return cy.xpath('//*[@data-value="Compliance Issue"]')    //button[@aria-label="Case Category, Compliance Issue"]
    }
    getTimeSenstiveCheckbox() {
      return cy.xpath("//h2[text()='New Case: OGIS']//following::input[1]")
    }
    getFoiaRequestStage() {
        return cy.xpath('//button[@aria-label="FOIA Request Stage, --None--"]')
    }
    getFoiaRequestStageValue() {
      return cy.xpath('//*[@data-value="PreFOIA"]')  //button[@aria-label="FOIA Request Stage, PreFOIA"]
  }
    getContactName() {
      return cy.xpath('//h2[text()="New Case: OGIS"]//following::input[5]')
   }
    getContactNameValue() {
      return cy.xpath('//*[placeholder="Sam Lee"]')
   }
   getNewContactLink() {
     return  cy.xpath('//span[@title="New Contact"]')
   }

   getDateAssigned()
   {
      return cy.xpath("//h2[text()='New Case: OGIS']//following::input[7]")
   }
   getUpdateDateAssigned()
   {
    return cy.xpath('//h3/span[text()="Contact Information"]//following::input[3]')  // input[name="Date_Assigned__c"]
   }
   getDateReceived()
   {
      return cy.xpath("//h2[text()='New Case: OGIS']//following::input[8]")
   }
   getUpdateDateReceived()
   {
      return cy.xpath('//h3/span[text()="Contact Information"]//following::input[4]')  // 'input[name="Date_Assigned__c"]
   }

   getDateOfInitialContact()
   {
    return cy.xpath('//h3/span[text()="Contact Information"]//following::input[5]')
 }

   getCaseOrigin() {
      return cy.xpath("//button[@aria-label='Case Origin, --None--']")  //button[@aria-label='Case Origin, --None--']
    }
    getCaseOriginFilled() {
      return cy.xpath("//button[@aria-label='Case Origin, --Email--']")  //button[@aria-label='Case Origin, --None--']
    }
    getCaseOriginSelectionEmail() {
      return cy.xpath('//*[@data-value="Email"]')
    }
    getUpdateCaseOriginSelectionPhone() {
      return cy.xpath('//*[@data-value="Phone"]')
    }
    getCaseType() {
      return cy.xpath('//button[@aria-label="Type, --None--"]')
    }
    getCaseTypeSelection() {
      return cy.xpath('//*[@data-value="Requester"]')
    }
    // currently not used
    getCaseSummayField() {
      //eturn cy.xpath('//*[@field-label="Case Summary"]')
        //return cy.get('textarea[lightning-textarea_textarea]:first-of-type')
        return cy.xpath('(//textArea)[3]')
    }
    getTestSubjectField() {
      return cy.xpath('//h2[text()="New Case: OGIS"]//following::input[10]')
      ////input[@name="Subject"]
    }
    getDescriptTextArea() {
      return cy.xpath('(//textArea)[2]')
    }
    getStatus() {
      return cy.xpath('//button[@aria-label="Status, Open"]')
    }
    getStatusClosedSelection() {
      return cy.xpath('//*[@data-value="Closed"]')
      //return cy.xpath('//button[@aria-label="Status, Closed"]')
    }
     getStatusValue()  {
      return cy.xpath('//*[@data-value="Open"]')
    }
    getSaveModalButton()
    {
       //return cy.get(".isModal.inlinePanel.oneRecordActionWrapper button[name='SaveEdit']")
       return cy.xpath('//button[@name="SaveEdit"]')
    }
    getCaseCreatedText()
    {
       //return cy.get(".isModal.inlinePanel.oneRecordActionWrapper button[name='SaveEdit']")
       return cy.xpath('//span[text()="Case Number"]')
    }
    getTemplateNumIfRelevant()
    {
       return cy.xpath('//button[@aria-label="Template # Enter if Relevant, --None--"]') 
    }
    getTemplateNumIfRelevantSelection()
    {
      return cy.xpath('//*[@data-value="Not Applicable"]')
    }

   
}
export default newCaseModalPageObject;


// Web Name  -  //*[contains(text(), 'Web Name')]
// Web Email  -  //*[contains(text(), 'Web Email')]

