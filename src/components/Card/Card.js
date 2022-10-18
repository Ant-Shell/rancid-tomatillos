import React from "react"
import "./Card.css"
import {Link} from "react-router-dom"

const Card = ( {title, poster, showMovieDetails, id} ) => {
  return (
    <div onClick={() => showMovieDetails(id)} className="card">
      <Link to={`/${id}`}><img className="movie-poster" src={poster} alt={`Movie poster for ${title}`}></img></Link>
      <h2 className="movie-title">{title}</h2>
    </div>
  )
}


export default Card