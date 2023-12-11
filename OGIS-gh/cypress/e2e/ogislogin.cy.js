/// <reference types="cypress" />

//import { it } from "mocha"
import homePageObject from "../support/pageObjects/homePageObject"
import loginPageObject from "../support/pageObjects/loginPageObject"
import newCaseModalPageObject from "../support/pageObjects/newCaseModalPageObject"

const ogisHome = new homePageObject()
const loginPage = new loginPageObject()
const newcaseModalPage = new newCaseModalPageObject()

describe('Login to OGIS', function () {

    beforeEach(function () {
        cy.visit(Cypress.env('ogisTest'))
        cy.fixture('userCred').then(data => {
            this.data = data
        })
    })

    // "WELCOME OGIS Homepage"
    it('should login to OGIS', function () {

        // enter user credentails
        loginPage.getUserName().clear().type(this.data.username)
        loginPage.getPassword().type(this.data.wrongpassword, {log: false})
        loginPage.clickSignInButton().click()
        loginPage.getErrorMessage().should('be.visible')
                .and('include.text', 'Please check your username and password')
        loginPage.getUserName().clear().type(this.data.username)
        loginPage.getPassword().type(this.data.password), {log: false}
        loginPage.clickSignInButton().click({force: true})  
        
        // ogisHome.getNewButton()
        //                         .should('be.visible')
        //                         .and('have.text', 'New')
        //                         .click()
        
  

    })

})

