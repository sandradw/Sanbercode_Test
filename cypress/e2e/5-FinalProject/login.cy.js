import LoginPage from "../../support/PageObjects/LoginPage";
import LoginData from "../../fixtures/LoginData.json"

describe('Scenario Login', () => {

    beforeEach(() => {
        LoginPage.visit();
        //cy.visit('https://opensource-demo.orangehrmlive.com/')
    });

    it('TC_001 - Login Berhasil dengan username & password benar', () => {
        cy.intercept('GET', '**/web/index.php/dashboard/index*').as('dashboardLoad');
        LoginPage.inputUsername(LoginData.validUsername)
        LoginPage.inputPassword(LoginData.validPassword)
        LoginPage.visible_button()
        LoginPage.login_button()
    
        // Tunggu sampai dashboard dimuat (indikasi login berhasil)
        cy.wait('@dashboardLoad').its('response.statusCode').should('be.oneOf', [200, 304]);
        LoginPage.verifyLoginSuccess()

    })

    it('TC_002 - Login Gagal dengan username & password salah', () => {
        LoginPage.inputUsername(LoginData.invalidUsername)
        LoginPage.inputPassword(LoginData.invalidPassword)
        LoginPage.visible_button()
        LoginPage.login_button()
        LoginPage.verifyInvalidCredentials()
    })

    it('TC_003 - Login Gagal dengan username salah', () => {
        LoginPage.inputUsername(LoginData.invalidUsername)
        LoginPage.inputPassword(LoginData.validPassword)
        LoginPage.visible_button()
        LoginPage.login_button()
        LoginPage.verifyInvalidCredentials()
    })

    it('TC_004 - Login Gagal dengan password salah', () => {
        LoginPage.inputUsername(LoginData.validUsername)
        LoginPage.inputPassword(LoginData.invalidPassword)
        LoginPage.visible_button()
        LoginPage.login_button()
        LoginPage.verifyInvalidCredentials()
    })

    it('TC_005 - Login Gagal dengan username kosong', () => {
        LoginPage.inputEmptyUsername()
        LoginPage.inputPassword(LoginData.validPassword)
        LoginPage.visible_button()
        LoginPage.login_button()
        LoginPage.verifyFieldRequired('Username')
    })

    it('TC_006 - Login Gagal dengan password kosong', () => {
        LoginPage.inputUsername(LoginData.validUsername)
        LoginPage.inputEmptyPassword()
        LoginPage.visible_button()
        LoginPage.login_button()
        LoginPage.verifyFieldRequired('Password')
    })
    
    it('TC_007 - Login Gagal dengan username & password kosong', () => {
        LoginPage.inputEmptyUsername()
        LoginPage.inputEmptyPassword()
        LoginPage.visible_button()
        LoginPage.login_button()
        LoginPage.verifyFieldRequired('Username')
        LoginPage.verifyFieldRequired('Password')
    })

});