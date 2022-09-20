var cypressWaitUntil = require("cypress-wait-until")

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3040')
    cy.get('#search-input').type('Lord of the Rings')
    cy.get('#search-button').click()
    cy.location('search').should('equal', '?search=Lord+of+the+Rings')
  
    cy.get('.result-number', { timeout: 10000 })

  })
})