describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    
    cy.get('[data-testid="cypress-home-title"]').should("exist")
    .get('div')
    .should('have.class', 'profileDetails')
  })
})