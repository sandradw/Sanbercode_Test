/// <reference types="cypress" />

describe('Reqres API Testing', () => {
    it('POST API Testing with API Key', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1'
            },
            body: {
                name: 'morpheus',
                job: 'leader'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name', 'morpheus')
            expect(response.body).to.have.property('job', 'leader')
            expect(response.body).to.have.property('id') // ID is auto-generated
            expect(response.body).to.have.property('createdAt') // Timestamp
        })
    })
})