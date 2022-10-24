import React from "react"
import "./Header.css"
import MovieSearch from "../MovieSearch/MovieSearch"
import AWLogo from "../../assets/AWFilmReviews-Transparent.png"


const Header = ({ findMovieByTitle, movieSearchResults, clearSearchResults, hasSearchResult }) => {
  return (
    <header>
      <div className="logo-container">
        <img src={AWLogo} alt='logo for A&W Movie Time' className='logo' />
      </div>
      <div className="title-container">
        <h1>A&W Movie Time!</h1>
      </div>
      <div className="search-container">
        <div className="search-box">
          <MovieSearch findMovieByTitle={findMovieByTitle} movieSearchResults={movieSearchResults} 
          clearSearchResults={clearSearchResults} hasSearchResult={hasSearchResult}/>
        </div>
        <div className="display-error">
          {!hasSearchResult && <p className="error-message">Result Not Found</p>}
        </div>
      </div>
    </header>
  )
}

export default Header