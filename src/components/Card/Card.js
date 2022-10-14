import React from "react"
import "./Card.css"

const Card = ( {title, poster} ) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={poster} alt={`Movie poster for ${title}`}></img>
    </div>
  )
}

export default Card