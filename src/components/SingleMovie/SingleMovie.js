import React, { Component } from "react"
import { fetchSpecificDetails } from '../../apiCalls'
import ErrorPage from "../ErrorPage/ErrorPage"
import {Link} from "react-router-dom"
import "./SingleMovie.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from "react-player";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

class SingleMovie extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            posterPath: '',
            trailerSwiper: [],
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


    trailers = () => {
        let trailerArray = this.state.trailerSwiper.map((trailer) => {
            return (
                <SwiperSlide className="trailer-slide" key={trailer.id}>
                  <ReactPlayer
                    className="video"
                    controls={true}
                    url={`https://www.youtube.com/watch?v=${trailer.key}`}
                  />
                </SwiperSlide>
              );
        })
        return trailerArray
    }

      restoreMovies = () => {
        this.props.showSearchBar()
        this.props.clearSearchResults()
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
                <section className="movie-trailer">
                    <div className="movie-trailer-view">
                        <Swiper
                            modules={[Navigation, Mousewheel, Keyboard]}
                            slidesPerView={1}
                            navigation={true}
                            keyboard={true}
                            mousewheel={false}
                            className="movie-trailer-card"
                        >
                            {this.trailers()}
                        </Swiper>
                    </div>
                </section>
                <div className="specifics">
                <h3 id='rating'>Rating: {parseInt(singleMovie.voteAverage).toFixed()}/10 </h3>
                <h3 id='runtime'>Runtime: {singleMovie.runTime} minutes</h3>
                <h3 id='genre'>Genre: {singleMovie.genres}</h3>
            </div>
                <h3>{singleMovie.overview}</h3>
                <Link to="/" onClick={this.restoreMovies}><button>View All Movies</button></Link>
            </div>
            
        )
    }
}

export default SingleMovie
