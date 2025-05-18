import forgotPasswordPage from "../../support/PageObjects/forgotPasswordPage"
import forgotPasswordData from "../../fixtures/forgotPasswordData.json"


describe('Scenario Forgot Password', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    });

    it('TC_001 - Forgot Password Berhasil', () => {
        //cy.xpath("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']").click()
        //cy.url().should('include', '/web/index.php/auth/requestPasswordResetCode');
        //cy.xpath("//input[@placeholder='Username']").clear().type('Admin')
        //cy.xpath("//button[normalize-space()='Reset Password']").should('be.visible')
        //cy.xpath("//button[normalize-space()='Reset Password']").click()
        //cy.url().should('include', '/web/index.php/auth/sendPasswordReset');
        cy.intercept('GET', '/web/index.php/auth/requestPasswordResetCode').as('forgotPasswordRequest');
        forgotPasswordPage.forgotPassword_button()
        cy.wait('@forgotPasswordRequest').its('response.statusCode').should('be.oneOf', [200, 304]);
        forgotPasswordPage.verifyforgotPassword()
        forgotPasswordPage.inputUsername(forgotPasswordData.validUsername)
        forgotPasswordPage.visiblereset_button()
        forgotPasswordPage.resetPassword_button() 
        forgotPasswordPage.verifyForgotPasswordSuccess()
    })

    it('TC_002 - Forgot Password - Cancel Button', () => {
        // cy.xpath("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']").click()
        // cy.url().should('include', '/web/index.php/auth/requestPasswordResetCode');
        // cy.xpath("//input[@placeholder='Username']").clear().type('Admin')
        // cy.xpath("//button[normalize-space()='Cancel']").should('be.visible')
        // cy.xpath("//button[normalize-space()='Cancel']").click()
        // cy.url().should('include', '/web/index.php/auth/login');
        forgotPasswordPage.forgotPassword_button()
        forgotPasswordPage.verifyforgotPassword()
        forgotPasswordPage.inputUsername(forgotPasswordData.validUsername)
        forgotPasswordPage.visiblecancel_button()
        forgotPasswordPage.cancel_button() 
        forgotPasswordPage.verifybackLogin()

    })

    it('TC_003 - Forgot Password dengan username kosong', () => {
        // cy.xpath("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']").click()
        // cy.url().should('include', '/web/index.php/auth/requestPasswordResetCode');
        // cy.xpath("//input[@placeholder='Username']").clear()
        // cy.xpath("//button[normalize-space()='Reset Password']").should('be.visible')
        // cy.xpath("//button[normalize-space()='Reset Password']").click()
        // cy.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").should('contain', 'Required')
        forgotPasswordPage.forgotPassword_button()
        forgotPasswordPage.verifyforgotPassword()
        forgotPasswordPage.inputEmptyUsername()
        forgotPasswordPage.visiblereset_button()
        forgotPasswordPage.resetPassword_button()
        forgotPasswordPage.verifyFieldRequired()
    })
});