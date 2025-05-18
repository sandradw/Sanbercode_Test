/// <reference types="cypress" />

describe('Reqres API Testing',() => {
    it('DELETE API Testing',() => {
         cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
            headers: {
                'x-api-key': 'reqres-free-v1'
            },
        }).then((response) => {
            expect(response.status).to.eq(204)
            expect(response.body).to.be.empty
        })
    })
})