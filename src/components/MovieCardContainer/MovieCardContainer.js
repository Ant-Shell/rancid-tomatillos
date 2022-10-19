import React from "react"
import "./MovieCardContainer.css"
import Card from "../Card/Card"

const MovieCardContainer = ( {movies}) => {
  const allMovies = movies.map(movie => {
    const {id, title, poster_path} = movie
    return (
    <Card
      id={id}
      title={title}
      poster={poster_path}
      key={id}
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