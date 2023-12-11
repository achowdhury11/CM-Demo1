/// <reference types="cypress" />

it('Regression test - regression test 1', function() {
    
    cy.visit("https://www.google.com")
    cy.get("textarea[jsname='yZiJbe']").type('Regression Test {enter}')
})
