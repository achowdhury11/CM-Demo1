// https://nationalarchives--ogiscat.sandbox.lightning.force.com/lightning/o/Contact/list?filterName=Recent
// This is reached by clicking the top level "Contacts" --> "All OGIS Cases" menu

class listViewControlPageObject
{
getNewListViewHeader() {
    return cy.xpath('//h2[text()="New List View"]') 
}
getListNameField() {
    return cy.xpath('//h2[text()="New List View"]//following::input[1]')
}
getOnlyICanSeeThisListViewRadioButton() {
    return cy.xpath('//h2[text()="New List View"]//following::input[2]')
}
getListSaveButton() {
    return cy.xpath('//h2[text()="New List View"]//following::button[3]')
}

// Priority - xpath?
           // list view screen displayed
           // should be selected
}       
export default listViewControlPageObject;