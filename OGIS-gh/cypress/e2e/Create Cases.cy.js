// Create a Case  - W-001003

/// <reference types="cypress" />

import dayjs from 'dayjs'
import { faker } from '@faker-js/faker';
import homePageObject from "../support/pageObjects/homePageObject"
import loginPageObject from "../support/pageObjects/loginPageObject"
import newCaseModalPageObject from "../support/pageObjects/newCaseModalPageObject"
import casePageObject from "../support/pageObjects/casePageObject"

const ogisHome = new homePageObject()
const loginPage = new loginPageObject()
const newcasePage = new newCaseModalPageObject()
const casePage = new casePageObject()

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

let anstring = faker.random.alphaNumeric(4)
let testsubject = "TestSubject_"+anstring
let description = "Description_"+anstring

it('Should Create New Case - W-001003', function() {
    cy.ogisLogin(this.data.username,this.data.password)
    ogisHome.getOGISPageLink().click()
    ogisHome.getNewButton()
            .should('be.visible')
            .and('have.text', 'New')
            .click()

    newcasePage.getCaseText().should('exist')
 
    newcasePage.getCaseSubCategory().click({force: true})
    newcasePage.getMoveCaseSubcategoryArrow().click()

    newcasePage.getCaseQueue().click()
    newcasePage.getCaseCaseQueueSelection().click()
    
    // newcasePage.getCaseCategory().click()
    // newcasePage.getCaseCategorySelection().click()

    newcasePage.getTimeSenstiveCheckbox().click()

    newcasePage.getDateAssigned().type(todaysDate)
    newcasePage.getDateReceived().type(todaysDate)

    newcasePage.getCaseOrigin().click()
    newcasePage.getCaseOriginSelectionEmail().click()

    // default status -  Open
    newcasePage.getStatus()
    newcasePage.getTestSubjectField().type(testsubject)
    newcasePage.getDescriptTextArea().type(description)


    //cy.xpath('[placeholder="Search Contacts..."]').click()

    
    //newcasePage.getSaveModalButton().click()  // save case


    newcasePage.getCaseCreatedText().contains('Case Number')

    casePage.getCaseView().contains('Date_Logged')
    casePage.getCaseView().contains('Unassigned')
   // casePage.getEditStatusButton().invoke('val').should('have.value','Open')
   casePage.getEditStatusButton().click()
    casePage.getFocusedEditStatusButton().click()
    casePage.getStatusValue().click()
    casePage.getCancelButton().click()  


})
  
})