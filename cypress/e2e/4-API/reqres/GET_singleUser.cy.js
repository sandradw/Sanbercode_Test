/// <reference types="cypress" />

describe('Reqres API Testing',() => {
    it('Test API Single User',() => {
        cy.request('GET', 'https://reqres.in/api/users/2')
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.to.be.null
        })
    })
})