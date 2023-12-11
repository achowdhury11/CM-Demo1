//  Create New Contact - W-000991, Also covers - Associate customer's contact info with one or more cases - W-000995



/// <reference types="cypress" />

import dayjs from 'dayjs'
import { faker } from '@faker-js/faker';
import homePageObject from "../support/pageObjects/homePageObject"
import loginPageObject from "../support/pageObjects/loginPageObject"
import newCaseModalPageObject from "../support/pageObjects/newCaseModalPageObject"
import casePageObject from "../support/pageObjects/casePageObject"
import newOGISContactPageObject from '../support/pageObjects/newOGISContactPageObject';

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
    let fname = faker.name.firstName()
    let lname = faker.name.lastName()
    let fullName = (fname+" "+lname)
    let email = faker.internet.email()
    let phoneNo = faker.phone.number()
    let inmateNum = faker.random.numeric(6)
    let addressNum = faker.random.numeric(4)
    let streetAddress = faker.address.streetAddress()
    let city = faker.address.city()
    let state = faker.address.state()
    let zipCode = faker.address.zipCode()
 
it('Should Create New Contact', function() {
    cy.ogisLogin(this.data.username,this.data.password)
     ogisHome.getOGISPageLink().click()
     ogisHome.getContactsPageLink().click({timeout:3000})
     
     //ogisHome.getContactsDropdownButton().trigger('mouseover', {timeout:1000}).click({force:true})
    
     ogisHome.getContactsMenuItm().click({timeout:2000}).click({force:true})

     newContactPage.getOgisContactFirstNameLabel().should('contain', 'First Name')
     newContactPage.getOgisContactLastNameLabel().should('contain', 'Last Name')
     newContactPage.getOgisContactInmateNumberLabel().should('contain', 'Inmate Number')
     newContactPage.getOgisContactEmailLabel().should('contain', 'Email')
     newContactPage.getOgisContactAddressLabel().should('contain', 'Home Address')

     newContactPage.getOgisContactFirstName().should("exist").type(fname)
     newContactPage.getOgisContactLastName().type(lname)
     newContactPage.getOgisContactEmailAddress().type(email)
     newContactPage.getOgisPhoneNumber().type(phoneNo)
     newContactPage.getOgisInmateNumber().type(inmateNum)

     //newContactPage.getOgisAddressSearchField().type(addressNum)
     newContactPage.getOgisAddressStreet().type(streetAddress)
     newContactPage.getOgisAddressCity().type(city)
     newContactPage.getOgisAddressState().type(state)
     newContactPage.getOgisContactZip().type(zipCode)
     newContactPage.getOgisAddressCountry().type('USA')

     newContactPage.getSaveButton().click()
     cy.contains(fullName).should('exist')

})
})