/// <reference types="cypress" />

describe('GET User Not Found - Negative Case', () => {
    it('Should return 404 when user not found', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/23',
            headers: {
                'x-api-key': 'reqres-free-v1'
            },
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.be.empty
        })
    })
})