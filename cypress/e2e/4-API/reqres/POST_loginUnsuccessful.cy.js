/// <reference types="cypress" />

describe('Negative Register API Testing', () => {
    it('Should return 400 when password is missing', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1' 
            },
            body: {
                email: 'peter@klaven'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'Missing password')
        })
    })
})