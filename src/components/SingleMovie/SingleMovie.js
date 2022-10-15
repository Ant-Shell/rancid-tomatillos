import React from "react"
import "./SingleMovie.css"

const SingleMovie = (props) => {
    return (
        <div className="movie-box">
            <h2>{props.singleMovie.title}</h2>
            <div className="specifics">
                <h3>Rating: {props.singleMovie.average_rating} </h3>
                <h3>Runtime: {props.singleMovie.runtime} </h3>
                <h3>Genre: {props.singleMovie.genres}</h3>
            </div>
            <h3>{props.singleMovie.overview}</h3>
            <button onClick={() => props.showAllMovies()}>View All Movies</button>
        </div>
    )
}

export default SingleMovie