import React from "react"
import "./MovieCardContainer.css"
import Card from "../Card/Card"

const MovieCardContainer = ( {movies, showMovieDetails}) => {
  const allMovies = movies.map(movie => {
    return (
    <Card
      id={movie.id}
      title={movie.title}
      poster={movie.poster_path}
      key={movie.id}
      showMovieDetails={showMovieDetails}
    />
    )
  })

  return (
    <div className="all-movies-container">
      { allMovies }
    </div>
  )
}

export default MovieCardContainer