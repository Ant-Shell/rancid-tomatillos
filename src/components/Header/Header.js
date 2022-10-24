import React from "react"
import "./Header.css"
import MovieSearch from "../MovieSearch/MovieSearch"

const Header = ({ findMovieByTitle, movieSearchResults, clearSearchResults }) => {
  return (
    <header>
      <h1>A&W Movie Time!</h1>
      <MovieSearch findMovieByTitle={findMovieByTitle} movieSearchResults={movieSearchResults} clearSearchResults={clearSearchResults}/>
    </header>
  )
}

export default Header