describe('empty spec', () => {
  beforeEach(() => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const pageNum = 1
    cy.intercept('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}&with_watch_monetization_types=flatrate`, {
      fixture: 'movieData.json'
    })
    cy.visit('http://localhost:3000');
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

  it('should display movie details when clicking a movie card', () => {
    cy.get('[id="718930"]').click()
    .url().should('include', '/718930')
    .get('button').click()
  })

  it('should display a loading screen if no movies are loaded yet', () => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const pageNum = 1
    cy.intercept('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}&with_watch_monetization_types=flatrate`, {
      fixture: 'emptyData.json'
    })
    cy.visit('http://localhost:3000')
    .get('h2')
    .contains('Stay tuned for our feature presentation...')
  })

  it('should display an error message if a link is invalid', () => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const id = 717728
    cy.intercept('GET', `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`, {
      fixture: 'emptyData.json'
    })
    cy.get('[id="717728"]').click()
    .get('h2')
    .contains('Oops! An error occurred while loading.')  
  })
})