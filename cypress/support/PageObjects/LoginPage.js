import LoginData from "../../fixtures/LoginData.json";

class loginPage{
    visit() {
        //Buka halaman website login
        cy.visit('/web/index.php/auth/login')
        cy.xpath("//input[@placeholder='Username']").should('be.visible'); // tunggu form siap
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

    visible_button(){
        cy.xpath("//button[normalize-space()='Login']").should('be.visible')
    }

    verifyLoginSuccess(){
        cy.url().should('include', '/dashboard/index');
    }

    verifyInvalidCredentials(){
        cy.xpath("//div[@class='oxd-alert-content oxd-alert-content--error']").should('contain', 'Invalid credentials')
    }

    inputEmptyUsername(){
    cy.xpath("//input[@placeholder='Username']").clear()
    }

    inputEmptyPassword(){
    cy.xpath("//input[@placeholder='Password']").clear()
    }

    verifyFieldRequired(field = 'Username') {
        cy.xpath(`//label[contains(text(),'${field}')]/ancestor::div[contains(@class,'oxd-input-group')]//span[text()='Required']`).should('be.visible');
    }

    verifyFieldRequired(field = 'Password') {
        cy.xpath(`//label[contains(text(),'${field}')]/ancestor::div[contains(@class,'oxd-input-group')]//span[text()='Required']`).should('be.visible');
    }

}

export default new loginPage()