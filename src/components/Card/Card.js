import React from "react"
import "./Card.css"
import {Link} from "react-router-dom"

const Card = ( {title, poster, id, releaseDate, backgroundimg} ) => {
  return (
    <div className="card" id={id}>
      <Link to={`/${id}`}>
        <img className="movie-poster" src={poster} alt={`Movie poster for ${title}`}></img>
        <h2 className="movie-title">{title}</h2>
        <p>{releaseDate}</p>
        {/* <img className="movie-poster" src={backgroundimg} alt={`Movie poster for ${title}`}></img> */}
      </Link>
    </div>
  )
}


export default Card