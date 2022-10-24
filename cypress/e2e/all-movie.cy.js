describe('All Movies', () => {
  beforeEach(() => {
    cy.intercept('GET', Cypress.env('all_movies'), {
      fixture: 'movieData.json'
    })
    cy.visit('http://localhost:3000')
  })
  
  it('should show the title of the website', () => {
    cy.get('h1')
    .contains('A&W Movie Time')
  })
  
  it('should show a collection of movies on load', () => {
    cy.get('.all-movies-container')
    .find('img')
    .should('have.length', 60)
  })

  it('should go to a different page when clicking a movie card', () => {
    cy.get('[id="718930"]').click()
    .url().should('include', '/718930')
  })

  it('should display a loading screen if no movies are loaded yet', () => {
    cy.intercept('GET', Cypress.env('all_movies'), {
      fixture: 'emptyData.json'
    })
    cy.visit('http://localhost:3000')
    .get('h2')
    .contains('Stay tuned for our feature presentation...')
  })

  it('should display an error message if a link is invalid', () => {
    cy.intercept('GET', Cypress.env('invalid_link'), {
      fixture: 'emptyData.json'
    })
    cy.get('[id="717728"]').click()
    .get('h2')
    .contains('Oops! An error occurred while loading.')  
  })

  it('should have contributor names in the footer', () => {
    cy.get('h3')
    .contains("Contributors")
    .get('h4')
    .contains('Anthony Shellman')
    .get('h4')
    .contains('Will Hobson')
  })
})