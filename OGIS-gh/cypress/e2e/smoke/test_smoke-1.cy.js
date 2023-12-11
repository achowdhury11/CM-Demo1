/// <reference types="cypress" />

it('Smoke test - smoke test 1', function() {
    
    cy.visit("https://www.google.com")
    cy.get("textarea[jsname='yZiJbe']").type('Smoke Test {enter}')
})
