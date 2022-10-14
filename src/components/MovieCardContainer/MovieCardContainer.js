import React from "react"
import "./MovieCardContainer.css"
import Card from "../Card/Card"

const MovieCardContainer = ( {movies}) => {
  const allMovies = movies.map(movie => {
    return (
    <Card
    title={movie.title}
    poster={movie.poster_path}
    />
    )
  })

  return (
    <div className="movie-container">
      { allMovies }
    </div>
  )
}

export default MovieCardContainer