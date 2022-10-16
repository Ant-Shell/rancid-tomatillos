import React from "react"
import "./SingleMovie.css"

const SingleMovie = ({singleMovie, showAllMovies}) => {
    const {title, average_rating, runtime, genres, overview} = singleMovie
    return (
        <div className="movie-box">
            <h2>{title}</h2>
            <div className="specifics">
                <h3>Rating: {average_rating} </h3>
                <h3>Runtime: {runtime} </h3>
                <h3>Genre: {genres}</h3>
            </div>
            <h3>{overview}</h3>
            <button onClick={() => showAllMovies()}>View All</button>
        </div>
    )
}

export default SingleMovie