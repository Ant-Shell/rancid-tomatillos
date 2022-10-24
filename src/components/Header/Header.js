import React from "react"
import "./Header.css"
import MovieSearch from "../MovieSearch/MovieSearch"
import AWLogo from "../../assets/AWFilmReviews-Transparent.png"


const Header = ({ findMovieByTitle, movieSearchResults, clearSearchResults }) => {
  return (
    <header>
      <img src={AWLogo} alt='logo for A&W Movie Time' className='logo' />
      <h1>A&W Movie Time!</h1>
      <MovieSearch findMovieByTitle={findMovieByTitle} movieSearchResults={movieSearchResults} clearSearchResults={clearSearchResults}/>
    </header>
  )
}

export default Header