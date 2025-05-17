import LoginPage from "../../support/PageObjects/LoginPage";
import LoginData from "../../fixtures/LoginData.json"

describe('Scenario Login', () => {

    beforeEach(() => {
        LoginPage.visit();
        //cy.visit('https://opensource-demo.orangehrmlive.com/')
    });

    it('TC_001 - Login Berhasil dengan username & password benar', () => {
        //cy.xpath("//input[@placeholder='Username']").clear().type('Admin')
        //cy.xpath("//input[@placeholder='Password']").clear().type('admin123')
        //cy.xpath("//button[normalize-space()='Login']").should('be.visible')
        //cy.xpath("//button[normalize-space()='Login']").click()
        //cy.url().should('include', '/dashboard/index');
        LoginPage.inputUsername(LoginData.validUsername)
        LoginPage.inputPassword(LoginData.validPassword)
        LoginPage.visible_button()
        LoginPage.login_button()
        LoginPage.verifyLoginSuccess()

    })

    it('TC_002 - Login Gagal dengan username & password salah', () => {
        // cy.xpath("//input[@placeholder='Username']").clear().type('invalid_user')
        // cy.xpath("//input[@placeholder='Password']").clear().type('wrong_password')
        // cy.xpath("//button[normalize-space()='Login']").should('be.visible')
        // cy.xpath("//button[normalize-space()='Login']").click()
        // cy.xpath("//div[@class='oxd-alert-content oxd-alert-content--error']").should('contain', 'Invalid credentials')
        LoginPage.inputUsername(LoginData.invalidUsername)
        LoginPage.inputPassword(LoginData.invalidPassword)
        LoginPage.visible_button()
        LoginPage.login_button()
        LoginPage.verifyInvalidCredentials()
    })

    it('TC_003 - Login Gagal dengan username salah', () => {
        // cy.xpath("//input[@placeholder='Username']").clear().type('invalid_user')
        // cy.xpath("//input[@placeholder='Password']").clear().type('admin123')
        // cy.xpath("//button[normalize-space()='Login']").should('be.visible')
        // cy.xpath("//button[normalize-space()='Login']").click()
        // cy.xpath("//div[@class='oxd-alert-content oxd-alert-content--error']").should('contain', 'Invalid credentials')
        LoginPage.inputUsername(LoginData.invalidUsername)
        LoginPage.inputPassword(LoginData.validPassword)
        LoginPage.visible_button()
        LoginPage.login_button()
        LoginPage.verifyInvalidCredentials()
    })

    it('TC_004 - Login Gagal dengan password salah', () => {
        // cy.xpath("//input[@placeholder='Username']").clear().type('Admin')
        // cy.xpath("//input[@placeholder='Password']").clear().type('wrong_password')
        // cy.xpath("//button[normalize-space()='Login']").should('be.visible')
        // cy.xpath("//button[normalize-space()='Login']").click()
        // cy.xpath("//div[@class='oxd-alert-content oxd-alert-content--error']").should('contain', 'Invalid credentials')
        LoginPage.inputUsername(LoginData.validUsername)
        LoginPage.inputPassword(LoginData.invalidPassword)
        LoginPage.visible_button()
        LoginPage.login_button()
        LoginPage.verifyInvalidCredentials()
    })

    it('TC_005 - Login Gagal dengan username kosong', () => {
        // cy.xpath("//input[@placeholder='Username']").clear()
        // cy.xpath("//input[@placeholder='Password']").clear().type('admin123')
        // cy.xpath("//button[normalize-space()='Login']").should('be.visible')
        // cy.xpath("//button[normalize-space()='Login']").click()
        // cy.xpath("//input[@placeholder='Username']/ancestor::div[contains(@class,'oxd-input-group')]//span[text()='Required']").should('be.visible')
        LoginPage.inputEmptyUsername()
        LoginPage.inputPassword(LoginData.validPassword)
        LoginPage.visible_button()
        LoginPage.login_button()
        LoginPage.verifyFieldRequired('Username')
    })

    it('TC_006 - Login Gagal dengan password kosong', () => {
        // cy.xpath("//input[@placeholder='Username']").clear().type('Admin')
        // cy.xpath("//input[@placeholder='Password']").clear()
        // cy.xpath("//button[normalize-space()='Login']").should('be.visible')
        // cy.xpath("//button[normalize-space()='Login']").click()
        // // cy.xpath("//input[@placeholder='Password']/ancestor::div[contains(@class,'oxd-input-group')]//span[text()='Required']").should('be.visible')
        LoginPage.inputUsername(LoginData.validUsername)
        LoginPage.inputEmptyPassword()
        LoginPage.visible_button()
        LoginPage.login_button()
        LoginPage.verifyFieldRequired('Password')
    })
    
    it('TC_007 - Login Gagal dengan username & password kosong', () => {
        // cy.xpath("//input[@placeholder='Username']").clear()
        // cy.xpath("//input[@placeholder='Password']").clear()
        // cy.xpath("//button[normalize-space()='Login']").should('be.visible')
        // cy.xpath("//button[normalize-space()='Login']").click()
        // cy.xpath("//input[@placeholder='Username']/ancestor::div[contains(@class,'oxd-input-group')]//span[text()='Required']").should('be.visible')
        // cy.xpath("//input[@placeholder='Password']/ancestor::div[contains(@class,'oxd-input-group')]//span[text()='Required']").should('be.visible')
        LoginPage.inputEmptyUsername()
        LoginPage.inputEmptyPassword()
        LoginPage.visible_button()
        LoginPage.login_button()
        LoginPage.verifyFieldRequired('Username')
        LoginPage.verifyFieldRequired('Password')
    })

});