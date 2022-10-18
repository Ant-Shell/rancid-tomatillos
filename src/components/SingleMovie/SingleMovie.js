import React from "react"
import "./SingleMovie.css"
import {Link} from "react-router-dom"

const SingleMovie = ({title, average_rating, runtime, genres, overview}) => {
    // const {title, average_rating, runtime, genres, overview} = singleMovie
    return (
        <div className="movie-box">
            <h2>{title}</h2>
            <div className="specifics">
                <h3>Rating: {average_rating} </h3>
                <h3>Runtime: {runtime} </h3>
                <h3>Genre: {genres}</h3>
            </div>
            <h3>{overview}</h3>
            <Link to="/"><button>View All Movies</button></Link>
        </div>
    )
}

export default SingleMovie