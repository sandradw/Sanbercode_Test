/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('POST API Testing with API Key', () => {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1'
            },
            body: {
                name: 'morpheus',
                job: 'QA - leader'
            }
        }).then((response) => {
            console.log(response.body) // lihat dulu datanya

            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name', 'morpheus')
            expect(response.body).to.have.property('job', 'QA - leader')
            expect(response.body).to.have.property('updatedAt')
        })
    })
})