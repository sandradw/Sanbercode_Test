/// <reference types="cypress" />

describe('Reqres API Testing',() => {
    it('Get API Testing',() => {
         cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown',
            headers: {
                'x-api-key': 'reqres-free-v1'
            },
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.to.be.null
        })
    })
})