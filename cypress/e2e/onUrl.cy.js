describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3030/?search=Lord+of+the')  
    cy.get('.result-number', { timeout: 10000 })

  })
})