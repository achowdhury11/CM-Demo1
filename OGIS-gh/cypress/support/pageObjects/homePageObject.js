class homePageObject
{
    getNewButton()
    {
        return cy.get("div[title='New']")
    }
    getOGISPageLink()
    {
        return cy.xpath('//a[@title="OGIS Home Page"]')
    }
    getContactsPageLink()
    {
        return cy.xpath("//one-app-nav-bar-item-root[@data-id='Contact']")
    }
    getCasesPageLink()
    {
        return cy.xpath("//one-app-nav-bar-item-root[@data-id='Case']")
    }
    getContactsDropdownButton()
    {
        return cy.xpath("//one-app-nav-bar-item-root[@data-id='Contact']//a[@role='button']//lightning-primitive-icon//*[name()='svg']") 
          //one-app-nav-bar-item-root[@data-id='Contact']//a[@role='button']//lightning-primitive-icon//*[name()='svg']
    }
    getContactsMenuItm()
    { 
        //return cy.xpath('//span[contains(text(),"New Contact")]')  
        return cy.xpath('(//div[@title="New"][normalize-space()="New"])[1]')
        
        //  (//a[@role="menuitem"][@tabindex="-1"])[1]
    }
    getCaseDropdownButton()
    {
        return cy.xpath("//one-app-nav-bar-item-root[@data-id='Case']//a[@role='button'][1]")
        //  //one-app-nav-bar-item-root[@data-id='Case']//a[@role='button']//lightning-primitive-icon//*[name()='svg']
    }
    getCaseMenuItem()
    {
        return cy.xpath('//span[contains(text(),"New Case")]')
    }
    getCaseAllOGISCasesMenuItem()
    {
        return cy.xpath('//span[contains(text(),"All OGIS Cases")]')
    }
    getFilesDropdownButton()
    {
        return cy.xpath("//one-app-nav-bar-item-root[@data-id='File']//lightning-primitive-icon//*[name()='svg']")
    }
    getFilesDropdownButton()
    {
        return cy.xpath("//one-app-nav-bar-item-root[@data-id='report']//lightning-primitive-icon")
    }
    
    
} 
export default homePageObject;