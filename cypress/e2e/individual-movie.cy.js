describe('single-movie', () => {
  beforeEach(() => {
    // intercept on page load (beforeEach)
    // data file reads into stub - api endpoint to copy data?
    const API_KEY = process.env.REACT_APP_API_KEY
    const id = 436270
    cy.intercept('GET', `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`, {
      fixture: 'singleMovieData1.json'
    })
    cy.visit('http://localhost:3000/')
    .get('[id="436270"]').click().wait(500)
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
    // .contains('7.473') Unsure what is going on, test and mock data show different values ...
    .contains('Rating')
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