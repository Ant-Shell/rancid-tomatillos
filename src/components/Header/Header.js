import React from "react"
import "./Header.css"
import MovieSearch from "../MovieSearch/MovieSearch"

const Header = ({ findMovieByTitle }) => {
  return (
    <header>
      <h1>A&W Movie Time!</h1>
      <MovieSearch findMovieByTitle={findMovieByTitle}/>
    </header>
  )
}

export default Header