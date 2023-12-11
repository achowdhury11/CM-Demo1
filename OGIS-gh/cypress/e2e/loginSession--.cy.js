/// <reference types="cypress" />

import homePageObject from "../support/pageObjects/homePageObject"
import loginPageObject from "../support/pageObjects/loginPageObject"
import newCaseModalPageObject from "../support/pageObjects/newCaseModalPageObject"
import Commands from "../support/commands"

const ogisHome = new homePageObject()
const loginPage = new loginPageObject()
const newcaseModalPage = new newCaseModalPageObject()

describe('Login to OGIS', function () {
    beforeEach(function () {
        cy.fixture('userCred').then(data => {
            this.data = data
        })
    })
    
    // "Login to OGIS"
    
    it('should login to OGIS', function () {
        
       // cy.ogisLogin(this.data.username,this.data.wrongpassword,this.data.password)
       cy.ogisLoginwithSession(this.data.username,this.data.wrongpassword,this.data.password)
       
        ogisHome.getNewButton()
                            .should('be.visible')
                            .and('have.text', 'New')
                            
     })

})
