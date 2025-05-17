describe('Scenario Login', () => {
    beforeEach(() => {
        cy.intercept('GET','**/web/index.php/dashboard/index*').as('index')
        cy.intercept('GET','**/web/index.php/api/v2/dashboard/employees/time-at-work*').as('timeAtWork')
        cy.intercept('GET','**/web/index.php/api/v2/dashboard/employees/action-summary*').as('actionSummary')
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    });

    it('TC_001 - Successful login with valid username & password', () => {
        cy.xpath("//input[@placeholder='Username']").clear().type('Admin')
        cy.xpath("//input[@placeholder='Password']").clear().type('admin123')
        cy.xpath("//button[normalize-space()='Login']").should('be.visible').click()

        // Tunggu request muncul setelah login
        cy.wait('@index').its('response.statusCode').should('eq', 200)
        cy.wait('@timeAtWork').its('response.statusCode').should('eq', 200)
        cy.wait('@actionSummary').its('response.statusCode').should('eq', 200)

        // Pastikan URL sudah masuk ke dashboard
        cy.url().should('include', '/dashboard')
    })
});