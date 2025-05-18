import forgotPasswordData from "../../fixtures/forgotPasswordData.json";

class forgotPasswordPage{
    visit() {
        //Buka halaman website login
        cy.visit('/web/index.php/auth/login')
    }

    forgotPassword_button(){
        cy.xpath("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']").click()
    }

    verifyforgotPassword(){
        cy.url().should('include', '/web/index.php/auth/requestPasswordResetCode');
    }

    inputUsername(username){
        cy.xpath("//input[@placeholder='Username']").clear().type(username)
    }

    visiblereset_button(){
        cy.xpath("//button[normalize-space()='Reset Password']").should('be.visible')
    }

    resetPassword_button(){
        cy.xpath("//button[normalize-space()='Reset Password']").click()
    }

    verifyForgotPasswordSuccess(){
        cy.url().should('include', '/web/index.php/auth/sendPasswordReset');
    }

    inputEmptyUsername(){
        cy.xpath("//input[@placeholder='Username']").clear()
    }

    verifyFieldRequired(field = 'Username') {
        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").should('contain', 'Required')
    }

    verifybackLogin(){
        cy.url().should('include', '/web/index.php/auth/login');
    }

    visiblecancel_button(){
        cy.xpath("//button[normalize-space()='Cancel']").should('be.visible')
    }

    cancel_button(){
        cy.xpath("//button[normalize-space()='Cancel']").click()
    }

}

export default new forgotPasswordPage()