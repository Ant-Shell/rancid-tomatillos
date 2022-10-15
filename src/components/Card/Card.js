import React from "react"
import "./Card.css"

const Card = ( {title, poster, showMovieDetails} ) => {
  return (
    <div onClick={() => showMovieDetails()} className="card">
      <img className="movie-poster" src={poster} alt={`Movie poster for ${title}`}></img>
      <h2 className="movie-title">{title}</h2>
    </div>
  )
}

export default Card