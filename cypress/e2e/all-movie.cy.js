describe('empty spec', () => {
  beforeEach(() => {
    // intercept on page load (beforeEach)
    // data file reads into stub - api endpoint to copy data?
    cy.visit('http://localhost:3000');
  })
  
  it('should show the title of the website', () => {
    cy.get('h1')
    .contains('A&W Movie Time')
    
  })
  
  it('should show a collection of movies on load', () => {
    cy.get('.all-movies-container')
    .find('img')
    .should('have.length', 40)
    
  })

  it('should display movie details when clicking a movie card', () => {
    cy.get('[id="694919"]').click()
    .url().should('include', '/694919')
    
  })

  // ******REVISIT TEST ONCE WE MAKE ERROR PAGE******
  // Stub works, also need to stub in forEach as needed
  //
  // it('should display an error message if a link is invalid', () => {
  //   cy.intercept({
  //     method: 'GET',
  //     url: 'http://localhost:3001/694919'
  //   },
  //   {
  //     statusCode: 401,
  //     body: { 
  //       message: 'An error has occurred!' 
  //     }
  //   })
  //   .get('[id="694919"]').click()
  // })
    
    
})