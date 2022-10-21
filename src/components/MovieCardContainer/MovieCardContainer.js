import React from "react"
import "./MovieCardContainer.css"
import Card from "../Card/Card"

const MovieCardContainer = ( {movies}) => {
  const allMovies = movies.map(movie => {
    const {id, title, poster_path, release_date, backdrop_path} = movie
    return (
    <Card
      id={id}
      title={title}
      poster={`https://image.tmdb.org/t/p/original/${poster_path}`}
      backgroundimg={backdrop_path}
      key={id}
      releaseDate={release_date}
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