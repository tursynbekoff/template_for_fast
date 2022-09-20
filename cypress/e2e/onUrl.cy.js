describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3040/?search=Lord+of+the')  
    cy.get('.result-number', { timeout: 10000 })

  })
})