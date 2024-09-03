describe('Get Users', () => {
    it('Add a new user', () => {
        var user = {
            "name": 'Mochammad Ervinda Yudistira',
            "job": 'Test Engineer'
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
        })
    })
})