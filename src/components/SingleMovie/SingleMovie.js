import React, { Component } from "react"
import { fetchSpecificDetails } from '../../apiCalls'
import ErrorPage from "../ErrorPage/ErrorPage"
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
            genres: [],
            hasError: false
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
         this.setState({backgroundImage: data.backdrop_path, title: data.title, posterPath: data.poster_path, 
            voteAverage: data.vote_average, runTime: data.runtime, overview: data.overview,
            genres: genreList})})
        .catch(err => {
            if (err) {
                this.setState({ hasError: true})
            }
            console.error(err)});
      }

    render = () => {
        const singleMovie = this.state
        return (
            this.state.hasError || this.state.title === ''
            ? <ErrorPage errorMessage={this.state.errorMessage}/>
            :
            <div className="movie-box" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${singleMovie.backgroundImage})`}}>
                <h2>{singleMovie.title}</h2>
                <img className="movie-poster" src={`https://image.tmdb.org/t/p/original/${singleMovie.posterPath}`} alt={`Movie poster for ${singleMovie.title}`}></img>
                <div className="specifics">
                <h3 id='rating'>Rating: {parseInt(singleMovie.voteAverage).toFixed()}/10 </h3>
                <h3 id='runtime'>Runtime: {singleMovie.runTime} minutes</h3>
                <h3 id='genre'>Genre: {singleMovie.genres}</h3>
            </div>
                <h3>{singleMovie.overview}</h3>
                <Link to="/"><button>View All Movies</button></Link>
            </div>
            
        )
    }
}

export default SingleMovie
