import React, { Component } from "react"
import { fetchSpecificDetails } from '../../apiCalls'
import {Link} from "react-router-dom"
import "./SingleMovie.css"

class SingleMovie extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            posterPath: '',
            voteAverage: '',
            runTime: '',
            overview: '',
            genres: []
        }
    }

    componentDidMount = () => {
        const id = this.props.id
        fetchSpecificDetails(id)
        .then(data => {
            const genreList = data.genres.reduce((acc, genre) => { 
                if (acc.length > 1) {
                    acc = acc + ', ' + genre.name
                } else {
                    acc = genre.name
                }
                return acc
            }, '')
         this.setState({title: data.title, posterPath: data.poster_path, 
            voteAverage: data.vote_average, runTime: data.runtime, overview: data.overview,
            genres: genreList})})
        .catch(err => console.error(err));
      }

    render = () => {
        const singleMovie = this.state
        console.log("Single movie:", singleMovie)
        console.log("Another test", this.state)
        return (
            <div className="movie-box">
                <h2>{singleMovie.title}</h2>
                <img className="movie-poster" src={`https://image.tmdb.org/t/p/original/${singleMovie.posterPath}`} alt={`Movie poster for ${singleMovie.title}`}></img>
                <div className="specifics">
                <h3>Rating: {singleMovie.voteAverage} </h3>
                <h3>Runtime: {singleMovie.runTime} minutes</h3>
                <h3>Genre: {singleMovie.genres}</h3>
            </div>
                <h3>{singleMovie.overview}</h3>
                <Link to="/"><button>View All Movies</button></Link>
            </div>
        )
    }
}

export default SingleMovie
