describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3040/?search=Lord+of+the')
  
    cy.get(':nth-child(1) > .card__img-button > img', { timeout: 10000 }).click()
    cy.wait(2000)
    cy.get(':nth-child(1) > :nth-child(1) > button').click()
  })
})