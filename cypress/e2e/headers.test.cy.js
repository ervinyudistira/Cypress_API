describe('Validate Header', () => {
    it('Successfully validate content-type', () => {
        // Menggunakan 'cy.request' untuk permintaan HTTP
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        
        // Mengakses alias 'pokemon' dan memeriksa header respons
        cy.get('@pokemon').its('headers').its('content-type')
          .should('include', 'application/json; charset=utf-8')
    })
})