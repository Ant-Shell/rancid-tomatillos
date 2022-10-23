import React from "react"
import "./Card.css"
import {Link} from "react-router-dom"

const Card = ( {title, poster, id} ) => {
  return (
    <div className="card" id={id}>
      <Link to={`/${id}`}>
        <img className="movie-poster" src={poster} alt={`Movie poster for ${title}`}></img>
        <h2 style={{color: 'white', textDecoration: 'none'}} className="movie-title">{title}</h2>
      </Link>
    </div>
  )
}


export default Card