describe('empty spec', () => {
  beforeEach(() => {
    // intercept on page load (beforeEach)
    // data file reads into stub - api endpoint to copy data?
    cy.visit('http://localhost:3000/')
    .get('[id="539885"]').click()
  })

  it('should have the title', () => {
    cy.get('h2')
    .contains('Ava')
  })

  it('should have a poster', () => {
    cy.get('img')
    .should('be.visible')
    
  })

  it('should have a rating', () => {
    cy.get('h3')
    .contains('5.875')
  })

  it('should have a runtime', () => {
    cy.get('h3')
    .contains('96')
  })

  it('should have a genre', () => {
    cy.get('h3')
    .contains('Action')
  })

  it('should have an overview', () => {
    cy.get('h3')
    .contains('assassin is forced to fight')
  })

  it("should show all movies when clicking 'show all movies' button", () => {
    cy.get('button').click()
    .visit('http://localhost:3000/')
    .get('.all-movies-container')
    .find('img')
    .should('have.length', 40)
  })
})