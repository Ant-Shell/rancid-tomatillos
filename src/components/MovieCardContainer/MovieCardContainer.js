import React from "react"
import "./MovieCardContainer.css"

const MovieCardContainer = ( {movies}) => {
  const allMovies = movies.map(movie => {
    return (
    <div>
    <p>Hello!</p>
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