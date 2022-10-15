import React from "react"
import "./SingleMovie.css"

const SingleMovie = (props) => {
    return (
        <div>
            <h2>{props.singleMovie.title}</h2>
            <div>
                <h3>{props.singleMovie.average_rating}</h3>
                <h3>{props.singleMovie.runtime}</h3>
                <h3>{props.singleMovie.genre}</h3>
            </div>
            <h3>{props.singleMovie.overview}</h3>
            <button onClick={() => props.showAllMovies()}>View All</button>
        </div>
    )
}

export default SingleMovie