describe('Update Users', () => {
    it('Successfully update user', () => {
        var newUser = {
            "name": "Mochmmad",
            "job": "zion resident"
        } 
        cy.request('PUT', 'https://reqres.in/api/users/2', newUser).then((response) => {
        expect(response.status).equal(200)
        expect(response.body.name).to.eq(newUser.name)

        })
    
    })
})