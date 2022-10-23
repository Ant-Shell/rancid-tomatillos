describe('Individual Movie', () => {
  beforeEach(() => {
    cy.intercept('GET', Cypress.env('individual_movie1'), {
      fixture: 'singleMovieData1.json'
    })
    cy.visit('http://localhost:3000/')
    .get('[id="436270"]').click()
  })

  it('should have the title', () => {
    cy.get('h2')
    .contains('Black Adam')
  })

  it('should have a poster', () => {
    cy.get('img')
    .should('be.visible')
    
  })

  it('should have a rating', () => {
    cy.get('h3')
    .contains('7/10')

  })

  it('should have a runtime', () => {
    cy.get('h3')
    .contains('125')
  })

  it('should have a genre', () => {
    cy.get('h3')
    .contains('Action')
  })

  it('should have an overview', () => {
    cy.get('h3')
    .contains('Black Adam')
  })

  it("should show all movies when clicking 'show all movies' button", () => {
    cy.get('button').click()
    .visit('http://localhost:3000/')
    .get('.all-movies-container')
    .find('img')
    .should('have.length', 60)
  })
})