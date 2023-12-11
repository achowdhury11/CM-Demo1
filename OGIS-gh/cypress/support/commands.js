
/// <reference types="cypress" />

//import { it } from "mocha"


import "cypress-file-upload"
import homePageObject from "../support/pageObjects/homePageObject"
import loginPageObject from "../support/pageObjects/loginPageObject"
import newCaseModalPageObject from "../support/pageObjects/newCaseModalPageObject"
import '@testing-library/cypress/add-commands';
require('cypress-xpath')

const MailSlurp = require('mailslurp-client').default;
const apiKey = '8b213859a9536c844fe975b0c05acc8843ff3188fb1c682e72199c1a215ce475';
const mailslurp = new MailSlurp({ apiKey });

const ogisHome = new homePageObject()
const loginPage = new loginPageObject()
const newcaseModalPage = new newCaseModalPageObject()


Cypress.Commands.add('getIframeBody', () => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return cy
    .get('iframe[title="dashboard"]')
    .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.wrap)
})



Cypress.Commands.add('ogisLogin', (username, password) => {
  // enter user credentails

  cy.visit(Cypress.env('ogisTest'))
  loginPage.getUserName().clear().type(username)
  loginPage.getPassword().type(password, { log: false })
  loginPage.clickSignInButton().click({ force: true })

//
cy.origin('https://nationalarchives--ogiscat.sandbox.lightning.force.com/one/one.app', () => {
  cy.on('uncaught:exception', (e) => {
    if (e.message.includes('Unable to read the Aura token from the response. This error was thrown by a cross origin page. If you wish to suppress this error you will have to use the cy.origin command to handle the error prior to visiting the page.')) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false
    }
  })
})
//




})

Cypress.Commands.add('clickSave', () => {
  cy.get('.isModal.active').find('button').then((response) => {
    cy.get(response[22]).click({ timeout: 50 })

  })
})

Cypress.Commands.add('ogisLoginwithSession', (username, password) => {
  // enter user credentails
  cy.session([username, password], () => {
    cy.visit(Cypress.env('ogisTest'))
    loginPage.getUserName().clear().type(username)
    loginPage.getPassword().type(password, { log: false })
    loginPage.clickSignInButton().click({ force: true })
  },
  {
    cacheAcrossSpecs: true
  })

})

Cypress.Commands.add('clickSave', () => {
  cy.get('.isModal.active').find('button').then((response) => {
    cy.get(response[22]).click({ timeout: 50 })

  })
})

// Cypress.Commands.add('getText', { prevSubject: 'element' }, 
//     ($element: JQuery<HTMLElement>) => {
//       cy.wrap($element).scrollIntoView()
//       return cy.wrap($element).invoke('text')
//     }
//   )

Cypress.Commands.add('getInbox', () => {
  return mailslurp.createInbox();
});

Cypress.Commands.add('waitForLatestEmail', (inboxId) => {
  return mailslurp.waitForLatestEmail(inboxId, { timeout: 30000 });
});