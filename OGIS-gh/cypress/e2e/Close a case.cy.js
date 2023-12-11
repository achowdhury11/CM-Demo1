//  Close a Case  - W-001027


/// <reference types="cypress" />

import dayjs from 'dayjs'
import { faker } from '@faker-js/faker';
import homePageObject from "../support/pageObjects/homePageObject"
import loginPageObject from "../support/pageObjects/loginPageObject"
import newCaseModalPageObject from "../support/pageObjects/newCaseModalPageObject"
import casePageObject from "../support/pageObjects/casePageObject"
import newOGISContactPageObject from '../support/pageObjects/newOGISContactPageObject'

const ogisHome = new homePageObject()
const loginPage = new loginPageObject()
const newcasePage = new newCaseModalPageObject()
const casePage = new casePageObject()
const newContactPage = new newOGISContactPageObject()

//Get sysdate
const todaysDate = dayjs().format('M/D/YYYY')
const randomString = faker.random.words(5)

describe('Login to OGIS', function () {

    beforeEach(function () {
        cy.viewport(1200, 800)
        cy.visit(Cypress.env('ogisTest'))
        cy.fixture('userCred').then(data => {
            this.data = data
        })
    })

let newcasenumber = ""    
let anstring = faker.random.alphaNumeric(4)
let testsubject = "TestSubject_"+anstring
let description = "Description_"+anstring
let casesummary = "CaseSummary_"+anstring
let rstr = faker.random.alpha(5)
let fname = faker.name.firstName()
let lname = ("Test_"+rstr)
let contactname = fname + lname
let email = faker.internet.email()
let phoneNo = faker.phone.number()

it('Should close a case - W-001027', function() {
    cy.ogisLogin(this.data.username,this.data.password)
    ogisHome.getOGISPageLink().click()
    ogisHome.getNewButton()
            .should('be.visible')
            .and('have.text', 'New')
            .click()

    // Section - Case Page required values entered 
    newcasePage.getCaseText().should('exist')
    cy.contains('Case Owner').should('be.visible')
    cy.contains('Case Number').should('be.visible')
    cy.contains('Contact Name').should('be.visible')

    newcasePage.getCaseOrigin().click()
    newcasePage.getCaseOriginSelectionEmail().click()
    newcasePage. getCaseType().click()
    newcasePage.getCaseTypeSelection().click()
    newcasePage.getCaseCategory().click()
    newcasePage.getCaseCategorySelection().click()
    newcasePage.getFoiaRequestStage().click()
    newcasePage.getFoiaRequestStageValue().click()
    newcasePage.getTemplateNumIfRelevant().click()
    newcasePage.getTemplateNumIfRelevantSelection().click() 
    newcasePage.getContactName().type("Test{enter}")
    //cy.xpath('//span[@title="New Contact"]').realHover().click() 
    newcasePage.getNewContactLink().realHover().click()
    
    // Section - New Contact entered for the Case and Saved
    newContactPage.getOgisContactFirstName().should("exist").type(fname)
    newContactPage.getOgisContactLastName().should("exist").type(lname)
    newContactPage.getPhoneFieldAlt().type(phoneNo)
    newContactPage.getEmailFiledAlt().type(email)
    newContactPage.getSaveButton().realClick()
     cy.wait(3000)

      // Section - Returned to the Case Modal and Closed Case
    newcasePage.getDescriptTextArea().type(description)
    newcasePage.getCaseSummayField().type(casesummary)
    newcasePage.getStatus().click()
    newcasePage.getStatusClosedSelection().realClick()
    newcasePage.getSaveModalButton().click()

    casePage.getStatusValue().should('have.text', 'Closed')
    //casePage.getCaseCreatedText().contains('Case Number')
    casePage.getDateClosed().should('not.be.null')
   
    casePage.getCaseNumberFieldValue().invoke("text").then(cy.log).then((text) => {
        cy.readFile('cypress/fixtures/OgisData.json').then((data) => {
            //data.caseNum = text
            //cy.writeFile('cypress/fixtures/example.json', JSON.stringify(data), {flag:'a+'})
            cy.writeFile('cypress/fixtures/example.json', {caseNum: text}, {flag:'a+'})
          })
     })
  })

})

    
    // Section - 
    
    //newcasePage.getSaveModalButton().click()

    // cy.contains('Type cannot be blank before case can be closed').should('be.visible')
    // cy.contains('Description cannot be blank before case can be closed').should('be.visible')
    // cy.contains('Contact Name cannot be blank before case can be closed').should('be.visible')
    // cy.contains('Case Summary cannot be blank before case can be closed').should('be.visible')

    // cy.contains('We hit a snag.').should('be.visible')
    // cy.xpath('//button[@title="Close error dialog"]').click()
    // cy.wait(1000)

    // cy.reload()
   

    
    // newcasePage.getCaseSubCategory().click({force: true})
    // newcasePage.getMoveCaseSubcategoryArrow().click()

    // newcasePage.getCaseQueue().click()
    // newcasePage.getCaseCaseQueueSelection().click()
    
    // newcasePage.getCaseCategory().click()
    // newcasePage.getCaseCategorySelection().click()

    // newcasePage.getTimeSenstiveCheckbox().click()

    // newcasePage.getDateAssigned().type(todaysDate)
    // newcasePage.getDateReceived().type(todaysDate)

    // newcasePage.getCaseOrigin().click()
    // newcasePage.getCaseOriginSelectionEmail().click()

    // // default status -  Open
    // newcasePage.getStatus()

    // newcasePage.getTestSubjectField().type(testsubject)
    // newcasePage.getDescriptTextArea().type(description)
    
    // newcasePage.getSaveModalButton().click()
    // newcasePage.getCaseCreatedText().contains('Case Number')

    // casePage.getCaseView().contains('Date Logged')
    // casePage.getCaseView().contains('Unassigned')
    // casePage.getEditStatusButton().trigger('mouseover').click()
    // casePage.getFocusedEditStatusButton().click()
    // casePage.getStatusValue().click()
    // casePage.getCancelButton().click()  


