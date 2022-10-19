import React, { Component } from "react"
import { fetchSpecificDetails } from '../../apiCalls'
import {Link} from "react-router-dom"
import "./SingleMovie.css"

class SingleMovie extends Component {
    constructor() {
        super()
        this.state = {
            movie: {}
        }
    }

    componentDidMount = () => {
        const id = this.props.id
        fetchSpecificDetails(id)
        .then(data => {
         this.setState({movie: data.movie})})
        .catch(err => console.error(err));
      }

    render = () => {
        const singleMovie = this.state.movie
        return (
            this.state.movie ? <div className="movie-box">
                <h2>{singleMovie.title}</h2>
                <img className="movie-poster" src={singleMovie.poster_path} alt={`Movie poster for ${singleMovie.title}`}></img>
                <div className="specifics">
                <h3>Rating: {singleMovie.average_rating} </h3>
                <h3>Runtime: {singleMovie.runtime} </h3>
                <h3>Genre: {singleMovie.genres}</h3>
            </div>
                <h3>{this.state.movie.overview}</h3>
                <Link to="/"><button>View All Movies</button></Link>
            </div> : <p className="error-message">An error has occured, please try again later.</p>
        )
    }
}

export default SingleMovie
