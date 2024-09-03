describe('Login Test', () => {
    it('should login via API successfully', () => {
      const email = Cypress.env('userEmail'); // atau bisa menggunakan email langsung
      const password = Cypress.env('userPassword'); // atau bisa menggunakan password langsung
      
      cy.loginViaAPI(email, password);
      
      // Lakukan assertion untuk memastikan user berhasil login
      cy.url().should('include', '/main');
      cy.getCookie('sessionId').should('exist');
      cy.getCookie('userId').should('exist');
      cy.getCookie('userName').should('exist');
    });
  });