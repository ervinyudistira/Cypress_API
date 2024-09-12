describe('API Test - Validate Ability Data', () => {
    it('should validate the ability name and URL', () => {
      
      cy.request('https://pokeapi.co/api/v2/pokemon/1/') 
        .then((response) => {
          
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('abilities');
          const ability = response.body.abilities.find(a => a.ability.name === 'limber');
          // Validasi apakah ability 'limber' ditemukan
          expect(ability).to.not.be.undefined;
          // Jika ditemukan, validasi URL-nya
          expect(ability.ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/');
        });
    });
  });