import dashboardDirectoryData from "../../fixtures/dashboardDirectoryData.json";

class dashboardDirectoryPage{
    visit() {
        cy.visit('/web/index.php/directory/viewDirectory')
    }

    InputName(name) {
        cy.xpath("//input[@placeholder='Type for hints...']").clear().type(name)
  }

    completeName(completename){
        cy.get('.oxd-autocomplete-option').should('contain.text', completename).click();
    }

    search_button(){
        cy.xpath("//button[normalize-space()='Search']").click()
    }

    visible_content(contentname){
        cy.contains('.oxd-text', contentname).should('be.visible')
    }

    dropdownJobActive(){
        cy.get('.oxd-select-wrapper').eq(0).click()
    }

    visibleDropDown(){
        cy.get('.oxd-select-dropdown').should('be.visible')
    }

    dropdownOptionJob(job){
        cy.get('.oxd-select-dropdown').contains(job).scrollIntoView().should('be.visible').click()
    }

    visibleContentJob(job){
        cy.get('.oxd-select-dropdown').contains(job).scrollIntoView().should('be.visible').click()
    }

    dropdownLocationActive(){
        cy.get('.oxd-select-text').eq(1).click()
    }

    dropdownOptionLocation(location){
        cy.get('.oxd-select-dropdown').contains(location).should('be.visible').click()
    }

    visibleContentLocation(location){
        cy.contains(location).should('be.visible')
    }

    visibleContentRecordFound(){
        cy.contains('Record Found').should('be.visible')
    }

    
    visibleContentRecorNotFound(){
        cy.contains('No Records Found').should('be.visible')
    }

    visibleNoRecordFound(){
        cy.get('.oxd-autocomplete-option').should('contain.text', 'No Records Found')
    }

    messageInvalid(){
        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").should('contain', 'Invalid')
    }

    reset_button(){
        cy.xpath("//button[normalize-space()='Reset']").click()
    }

    empty_value(){
        cy.xpath("//input[@placeholder='Type for hints...']").should('have.value', '')
    }

    inputUsername(username){
        cy.xpath("//input[@placeholder='Username']").clear().type(username)
    }

    inputPassword(password){
        cy.xpath("//input[@placeholder='Password']").clear().type(password)
    }

    login_button(){
        cy.xpath("//button[normalize-space()='Login']").click()
    }

    visible_buttonLogin(){
        cy.xpath("//button[normalize-space()='Login']").should('be.visible')
    }

    verifyLoginSuccess(){
        cy.url().should('include', '/dashboard/index');
    }

}

export default new dashboardDirectoryPage()