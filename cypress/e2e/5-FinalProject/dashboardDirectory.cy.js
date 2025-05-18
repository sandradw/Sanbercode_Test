import dashboardDirectoryPage from "../../support/PageObjects/dashboardDirectoryPage"
import dashboardDirectoryData from "../../fixtures/dashboardDirectoryData.json"

describe('Scenario Login', () => {
    beforeEach(() => {
        // cy.visit('https://opensource-demo.orangehrmlive.com/')
        // cy.xpath("//input[@placeholder='Username']").clear().type('Admin')
        // cy.xpath("//input[@placeholder='Password']").clear().type('admin123')
        // cy.xpath("//button[normalize-space()='Login']").click()
        // cy.url().should('include', '/dashboard')
        // cy.visit('/web/index.php/directory/viewDirectory')

        cy.visit('https://opensource-demo.orangehrmlive.com/');
        dashboardDirectoryPage.inputUsername(dashboardDirectoryData.validUsername)
        dashboardDirectoryPage.inputPassword(dashboardDirectoryData.validPassword)
        dashboardDirectoryPage.visible_buttonLogin()
        dashboardDirectoryPage.login_button()
        cy.visit('/web/index.php/directory/viewDirectory')
    })

    it('TC_001 - Cari berdasarkan nama karyawan', () => {
        // cy.xpath("//input[@placeholder='Type for hints...']").clear().type('manda')
        // // cy.get('.oxd-autocomplete-option').contains('Russel Hamilton').click()
        // cy.get('.oxd-autocomplete-option').should('contain.text', 'manda akhil user').click()
        // cy.xpath("//button[normalize-space()='Search']").click()
        // cy.contains('.oxd-text', 'manda akhil user').should('be.visible')
        dashboardDirectoryPage.InputName(dashboardDirectoryData.name)
        dashboardDirectoryPage.completeName(dashboardDirectoryData.fullName)
        dashboardDirectoryPage.search_button()
        dashboardDirectoryPage.visible_content(dashboardDirectoryData.name)
        
    })

    it('TC_002 - Cari berdasarkan Job Tittle', () => {
        //cy.get('.oxd-select-wrapper').eq(0).click()
        // cy.get('.oxd-select-dropdown').should('be.visible')
        // cy.get('.oxd-select-dropdown').contains('Chief Technical Officer').scrollIntoView().should('be.visible').click()
        //cy.xpath("//button[normalize-space()='Search']").click()
        //cy.contains('Chief Technical Officer').should('be.visible')
        dashboardDirectoryPage.dropdownJobActive()
        dashboardDirectoryPage.visibleDropDown()
        dashboardDirectoryPage.dropdownOptionJob(dashboardDirectoryData.job)
        dashboardDirectoryPage.search_button()
        dashboardDirectoryPage.visibleContentJob(dashboardDirectoryData.job)
    })

    it('TC_003 - Cari berdasarkan Location', () => {
        // cy.get('.oxd-select-text').eq(1).click()
        // cy.get('.oxd-select-dropdown').contains('Texas R&D').should('be.visible').click()
        // Pastikan dropdown sudah menampilkan pilihan yang benar
        // cy.get('.oxd-select-text').should('contain.text', 'Texas R&D')
        // cy.xpath("//button[normalize-space()='Search']").click()
        // cy.contains('Texas R&D').should('be.visible')
        cy.intercept('GET', '/web/index.php/api/v2/directory/employees*').as('location')
        dashboardDirectoryPage.dropdownLocationActive()
        dashboardDirectoryPage.visibleDropDown()
        dashboardDirectoryPage.dropdownOptionLocation(dashboardDirectoryData.location)
        dashboardDirectoryPage.search_button()
        cy.wait('@location').its('response.statusCode').should('be.oneOf', [200, 304])
        dashboardDirectoryPage.visibleContentLocation(dashboardDirectoryData.location)

    })

    it('TC_004 - Cari berdasarkan Nama, job, Location', () => {
        //cy.xpath("//input[@placeholder='Type for hints...']").clear().type('Russel')       
        //cy.get('.oxd-autocomplete-option').should('contain.text', 'Russel  Hamilton').click()       
        //cy.get('.oxd-select-text').eq(1).click();
        // cy.get('.oxd-select-dropdown').contains('Texas R&D').click();
        // cy.get('.oxd-select-text').should('contain.text', 'Texas R&D')
        // cy.xpath("//button[normalize-space()='Search']").click()
        // cy.contains('Record Found').should('be.visible')

        //job title gk ada yang sesuai? webnya berubah terus
        dashboardDirectoryPage.InputName(dashboardDirectoryData.name)
        dashboardDirectoryPage.completeName(dashboardDirectoryData.fullName)
        dashboardDirectoryPage.dropdownJobActive()
        dashboardDirectoryPage.dropdownOptionJob(dashboardDirectoryData.job)
        dashboardDirectoryPage.dropdownLocationActive
        dashboardDirectoryPage.dropdownOptionLocation(dashboardDirectoryData.location)
        dashboardDirectoryPage.search_button()
        dashboardDirectoryPage.visibleContentRecordFound()

    })

    it('TC_005 - Cari berdasarkan nama karyawan yang tidak terdaftar', () => {
        // cy.xpath("//input[@placeholder='Type for hints...']").clear().type('Sandra')
        // cy.get('.oxd-autocomplete-option').should('contain.text', 'No Records Found')
        // cy.xpath("//button[normalize-space()='Search']").click()
        // cy.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").should('contain', 'Invalid')
        dashboardDirectoryPage.InputName(dashboardDirectoryData.invalidName)
        dashboardDirectoryPage.visibleNoRecordFound()
        dashboardDirectoryPage.search_button()
        dashboardDirectoryPage.messageInvalid()
    
    })

    it('TC_006 - Tombol Reset menghapus semua filter pencarian', () => {
        // Isi form pencarian
        // cy.xpath("//input[@placeholder='Type for hints...']").clear().type('Russel')
        // cy.get('.oxd-autocomplete-option').should('contain.text', 'Russel  Hamilton').click()

        // cy.get('.oxd-select-text').eq(0).click(); // Job Title
        // cy.get('.oxd-select-dropdown').contains('Chief Technical Officer').click()

        // cy.get('.oxd-select-text').eq(1).click(); // Location
        // cy.get('.oxd-select-dropdown').contains('Texas R&D').click()

        // Klik tombol Reset
        // cy.xpath("//button[normalize-space()='Reset']").click()

        // Verifikasi bahwa semua field kembali kosong
        // cy.xpath("//input[@placeholder='Type for hints...']").should('have.value', '')

        dashboardDirectoryPage.InputName(dashboardDirectoryData.name)
        dashboardDirectoryPage.completeName(dashboardDirectoryData.fullName)
        dashboardDirectoryPage.dropdownJobActive()
        dashboardDirectoryPage.dropdownOptionJob(dashboardDirectoryData.job)
        dashboardDirectoryPage.dropdownLocationActive()
        dashboardDirectoryPage.dropdownOptionLocation(dashboardDirectoryData.location)
        dashboardDirectoryPage.reset_button()
        dashboardDirectoryPage.empty_value() 

    })

    it('TC_007 - Cari berdasarkan job (record not found)', () => {
        // cy.xpath("//input[@placeholder='Type for hints...']").clear().type('Sandra')
        // cy.get('.oxd-autocomplete-option').should('contain.text', 'No Records Found')
        // cy.xpath("//button[normalize-space()='Search']").click()
        // cy.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").should('contain', 'Invalid')
        dashboardDirectoryPage.dropdownJobActive()
        dashboardDirectoryPage.visibleDropDown()
        dashboardDirectoryPage.dropdownOptionJob(dashboardDirectoryData.jobNotFound)
        dashboardDirectoryPage.search_button()
        dashboardDirectoryPage.visibleContentRecorNotFound()

    })

})