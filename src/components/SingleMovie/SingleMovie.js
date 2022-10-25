import React, { Component } from "react"
import { fetchSpecificDetails, fetchTrailers } from '../../apiCalls'
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
        Promise.all([fetchSpecificDetails(id), fetchTrailers(id)])
        .then(data => {
            const movieInfo = data[0]
            const trailers = data[1].results
            const genreList = movieInfo.genres.reduce((acc, genre) => { 
                if (acc.length > 1) {
                    acc = acc + ', ' + genre.name
                } else {
                    acc = genre.name
                }
                return acc
            }, '')
            this.setState({backgroundImage: movieInfo.backdrop_path, title: movieInfo.title,  posterPath: movieInfo.poster_path, voteAverage: movieInfo.vote_average, runTime: movieInfo.runtime, overview: movieInfo.overview, genres: genreList, trailerSwiper: trailers})
        })
        .catch(err => {
            if (err) {
                this.setState({ hasError: true})
            }
            console.error(err)
        });
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
                <section className="movie-trailer">
                    <div className="movie-trailer-view">
                        <Swiper
                            modules={[Navigation, Mousewheel, Keyboard]}
                            slidesPerView={1}
                            navigation={true}
                            keyboard={true}
                            mousewheel={true}
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
