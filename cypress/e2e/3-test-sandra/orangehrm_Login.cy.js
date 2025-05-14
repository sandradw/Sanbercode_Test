describe('Scenario Login', () => {

    it('TC_001 - Login Berhasil dengan username & password benar', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.xpath("//input[@placeholder='Username']").clear().type('Admin')
        cy.xpath("//input[@placeholder='Password']").clear().type('admin123')
        cy.xpath("//button[normalize-space()='Login']").should('be.visible')
        cy.xpath("//button[normalize-space()='Login']").click()
        cy.url().should('include', '/dashboard/index');

    })

    it('TC_002 - Login Gagal dengan username & password salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.xpath("//input[@placeholder='Username']").clear().type('Admin123')
        cy.xpath("//input[@placeholder='Password']").clear().type('admin')
        cy.xpath("//button[normalize-space()='Login']").should('be.visible')
        cy.xpath("//button[normalize-space()='Login']").click()

        // Cek pesan error
        cy.xpath("//div[@class='oxd-alert-content oxd-alert-content--error']").should('contain', 'Invalid credentials')
    })

    it('TC_003 - Login Gagal dengan username salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.xpath("//input[@placeholder='Username']").clear().type('Adminn')
        cy.xpath("//input[@placeholder='Password']").clear().type('admin123')
        cy.xpath("//button[normalize-space()='Login']").should('be.visible')
        cy.xpath("//button[normalize-space()='Login']").click()

        // Cek pesan error
        cy.xpath("//div[@class='oxd-alert-content oxd-alert-content--error']").should('contain', 'Invalid credentials')
    })

    it('TC_004 - Login Gagal dengan password salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.xpath("//input[@placeholder='Username']").clear().type('Admin')
        cy.xpath("//input[@placeholder='Password']").clear().type('admin1233')
        cy.xpath("//button[normalize-space()='Login']").should('be.visible')
        cy.xpath("//button[normalize-space()='Login']").click()

        // Cek pesan error
        cy.xpath("//div[@class='oxd-alert-content oxd-alert-content--error']").should('contain', 'Invalid credentials')
    })

    it('TC_005 - Login Gagal dengan username kosong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    
        // Cek kolom username kosong dan pastikan pesan "required" muncul
        cy.xpath("//input[@placeholder='Username']").clear()
        cy.xpath("//input[@placeholder='Password']").clear().type('admin123')
        cy.xpath("//button[normalize-space()='Login']").should('be.visible')
        cy.xpath("//button[normalize-space()='Login']").click()
        cy.xpath("//input[@placeholder='Username']/ancestor::div[contains(@class,'oxd-input-group')]//span[text()='Required']").should('be.visible')
    })

    it('TC_006 - Login Gagal dengan password kosong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    
        // Cek kolom password kosong dan pastikan pesan "required" muncul
        cy.xpath("//input[@placeholder='Username']").clear().type('Admin')
        cy.xpath("//input[@placeholder='Password']").clear()
        cy.xpath("//button[normalize-space()='Login']").should('be.visible')
        cy.xpath("//button[normalize-space()='Login']").click()
        cy.xpath("//input[@placeholder='Password']/ancestor::div[contains(@class,'oxd-input-group')]//span[text()='Required']").should('be.visible')
    })
    
    it('TC_007 - Login Gagal dengan username & password kosong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.xpath("//input[@placeholder='Username']").clear()
        cy.xpath("//input[@placeholder='Password']").clear()
        cy.xpath("//button[normalize-space()='Login']").should('be.visible')
        cy.xpath("//button[normalize-space()='Login']").click()
        cy.xpath("//input[@placeholder='Username']/ancestor::div[contains(@class,'oxd-input-group')]//span[text()='Required']").should('be.visible')
        cy.xpath("//input[@placeholder='Password']/ancestor::div[contains(@class,'oxd-input-group')]//span[text()='Required']").should('be.visible')
    })

});