class loginPageObject
{
    getUserName()
    {
        return cy.get('#username')
    }
    getPassword()
    {
        return cy.get('#password')
    }
    getErrorMessage()
    {
        return cy.get('#error')
    } 
    clickSignInButton()
    {
        return cy.get('#Login')
    }
}
export default loginPageObject;
