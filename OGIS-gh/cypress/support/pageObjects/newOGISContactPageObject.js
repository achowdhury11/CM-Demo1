class newOGISContactPageObject
{
    getNewOgisContactHeader()
    {
        return cy.xpath('//h2[text()="New Contact: OGIS Contact"]')
    }
    getOgisContactFirstNameLabel()
    {
        return cy.contains('First Name')
    }
    getOgisContactLastNameLabel()
    {
        return cy.contains('Last Name')
    }
    getOgisContactInmateNumberLabel()
    {
        return cy.contains('Inmate Number')
    }
    getOgisContactEmailLabel()
    {
        return cy.contains('Email')
    }
    getOgisContactAddressLabel()
    {
        return cy.contains('Home Address')
    }
    getOgisContactFirstName()
    {
        return cy.xpath('//h2[text()="New Contact: OGIS Contact"]//following::input[1]')
    }
    getOgisContactLastName()
    {
        return cy.xpath('//h2[text()="New Contact: OGIS Contact"]//following::input[3]')
    }
    getOgisContactEmailAddress()
    {
        return cy.xpath('//input[@name="Email"]')
        //return cy.xpath('//h2[text()="New Contact: OGIS Contact"]//following::input[6]')
    }
    getOgisPhoneNumber()
    {
        return cy.xpath('//input[@name="Phone"]')
        // return cy.xpath('//h2[text()="New Contact: OGIS Contact"]//following::input[5]')
    }
    getPhoneFieldAlt() 
    {
        return cy.xpath('(//input[@type="tel"])[1]')
    }
    getEmailFiledAlt()
    {
        return cy.xpath('//input[@inputmode="email"]')
    }
    getOgisInmateNumber()
    {
        return cy.xpath('//h2[text()="New Contact: OGIS Contact"]//following::input[9]')
    }
  
    getOgisAddressSearchField()
    {
        return cy.xpath('//h2[text()="New Contact: OGIS Contact"]//following::input[10]')
    }
    getOgisAddressStreet()
    {
        return cy.xpath('//h2[text()="New Contact: OGIS Contact"]//following::textarea[1]')
    }
    getOgisAddressCity()
    {
        return cy.xpath('//h2[text()="New Contact: OGIS Contact"]//following::input[11]')
    }
    getOgisAddressState()
    {
        return cy.xpath('//h2[text()="New Contact: OGIS Contact"]//following::input[12]')
    }
    getOgisContactZip()
    {
        return cy.xpath('//h2[text()="New Contact: OGIS Contact"]//following::input[13]')
    }
    getOgisAddressCountry()
    {
        return cy.xpath('//h2[text()="New Contact: OGIS Contact"]//following::input[14]')
    }
    getSaveButton()
    {
        return cy.xpath('//button[text()="Save"]')
    }
    getCloseErrorButton()
    {
        return cy.xpath('(//*[@data-key="close"])[4]')
    }

    
}
export default newOGISContactPageObject;