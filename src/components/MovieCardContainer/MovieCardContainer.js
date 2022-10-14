import React from "react"
import "./MovieCardContainer.css"
import Card from "../Card/Card"

const MovieCardContainer = ( {movies}) => {
  const allMovies = movies.map(movie => {
    return (
    <div>
    <Card
    title={movie.title}
    poster={movie.poster_path}
    />

    </div>
    )
  })

  return (
    <div>
      { allMovies }
    </div>
  )
}

export default MovieCardContainer