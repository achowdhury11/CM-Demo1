//  https://nationalarchives--ogiscat.sandbox.lightning.force.com/lightning/o/Contact/list?filterName=Recent
//  Page is displayed when Contacts menu is clicked.

class contactPageObject
{
    getContactSearchField()  {
        return cy.xpath('(//input)[2]')
    }
    getContactNameMatched()  {
        return cy.xpath('(//table//tbody//tr//a)[1]')
    }
    getContactRecordType()  {
        return cy.xpath('(//table//tbody//tr)[1]//td[2]')
    }
    getContactEntityTitle() {
        return cy.xpath('(//h1)[2]/div[@class="entityNameTitle slds-line-height--reset"] ')
    }
    getContactEditButton() {
        return cy.xpath('//button[@name="Edit"]')
    }
    getCaseNumber() {
        return cy.xpath('//span[@title="Cases"]//following::a[2]')   
        //(//div[a])[15] -> case number on the contact page  - //div[a]//slot/span[@id="window"]  //a//span[@id="window"]
    }
    getUploadFileButton() {
        return cy.xpath('[data-key="upload"]')
    }
   

}
export default contactPageObject;