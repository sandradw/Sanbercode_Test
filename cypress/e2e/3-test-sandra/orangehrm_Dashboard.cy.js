describe('Scenario Dashboard OrangeHRM', () => {

    beforeEach(() => {
        // Abaikan error JS akibat 401 API
        Cypress.on('uncaught:exception', () => false);
      });

    it('TC_001 - Login berhasil dan verifikasi elemen dashboard', () => {
      // Buka halaman login
      cy.visit('https://opensource-demo.orangehrmlive.com/');
  
      // Input username dan password
      cy.xpath("//input[@placeholder='Username']").clear().type('Admin')
      cy.xpath("//input[@placeholder='Password']").clear().type('admin123')
      cy.xpath("//button[normalize-space()='Login']").should('be.visible')
      cy.xpath("//button[normalize-space()='Login']").click()
      cy.wait(2000);
  
      // Tunggu sampai redirect ke dashboard
      cy.url().should('include', '/dashboard/index');
  
      // ✅ Verifikasi elemen-elemen penting di halaman dashboard
  
      // Judul di header atas
      cy.get('.oxd-topbar-header-title').should('contain.text', 'Dashboard');
  
      // Nama user di kanan atas
      cy.get('.oxd-userdropdown-name').should('be.visible');
  
      // Panel Time at Work
      cy.xpath("//p[text()='Time at Work']").should('exist');
  
      // Panel My Actions
      cy.xpath("//p[text()='My Actions']").should('exist');
  
      // Panel Quick Launch
      cy.xpath("//p[text()='Quick Launch']").should('exist');
  
      // Panel Buzz Latest Posts
      cy.xpath("//p[text()='Buzz Latest Posts']").should('exist');
  
      // Panel Employee Distribution by Sub Unit
      cy.xpath("//p[text()='Employee Distribution by Sub Unit']").should('exist');

      // Panel Employee Distribution by Location
      cy.xpath("//p[text()='Employee Distribution by Location']").should('exist');
  
      // Sidebar Dashboard harus aktif
      cy.xpath("//span[text()='Dashboard']/ancestor::a").should('have.class', 'oxd-main-menu-item active');
  
      // ✅ Logout
  
      // Klik profil user kanan atas
      cy.get('.oxd-userdropdown-name').click();
  
      // Klik Logout
      cy.xpath("//a[normalize-space()='Logout']").click();
  
      // Verifikasi kembali ke halaman login
      cy.url().should('include', '/auth/login');
    });
  });