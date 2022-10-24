import React from "react"
import "./MovieCardContainer.css"
import Card from "../Card/Card"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MovieCardContainer = ( {movies, movieSearchResults}) => {
  const allMovies = movies.map(movie => {
    const {id, title, poster_path} = movie
    return (
      <SwiperSlide className="swiper-slider" key={id}>
        <Card
          id={id}
          title={title}
          poster={`https://image.tmdb.org/t/p/original/${poster_path}`}
          key={id}
        />
    </SwiperSlide>
    )
  })

  const searchedMovies = movieSearchResults.map(movie => {
    const {id, title, poster_path} = movie
    return (
      <SwiperSlide className="swiper-slider" key={id}>
        <Card
          id={id}
          title={title}
          poster={`https://image.tmdb.org/t/p/original/${poster_path}`}
          key={id}
        />
    </SwiperSlide>
    )
  })

  const slidesPerViewSetter = () => {
    if (movieSearchResults.length < 4) {
      return movieSearchResults.length
    } else {
      return 4
    }
  }

  return (
    <div className="all-movies-container">
    {!movieSearchResults.length ? <Swiper
          modules={[Navigation, Mousewheel, Keyboard]}
          slidesPerView={4}
          navigation={true}
          keyboard={true}
          mousewheel={true}
          className="all-swiper-movies"
        >
        { allMovies }
      </Swiper> : <Swiper
          modules={[Navigation, Mousewheel, Keyboard]}
          slidesPerView={slidesPerViewSetter()}
          navigation={true}
          keyboard={true}
          mousewheel={true}
          className="all-swiper-movies"
        >
         { searchedMovies }
        </Swiper>
      }
    </div>
  )
}

export default MovieCardContainer