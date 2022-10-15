import React, { Component } from "react"
import movieData from "../../movieData"
import individualMovie from "../../individualMovieData"
import MovieCardContainer from "../MovieCardContainer/MovieCardContainer"
import SingleMovie from "../SingleMovie/SingleMovie"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: true,
      movies: movieData.movies,
      movie: individualMovie.movie
    }
  }

  showMovieDetails = () => {
    this.setState({ allMovies: false })
  }

  showAllMovies = () => {
    this.setState({ allMovies: true})
  }

  render() {
    return(
      <main>
        {/* <Header /> */}
        {this.state.allMovies ? <MovieCardContainer showMovieDetails={this.showMovieDetails} movies={this.state.movies}/> :   <SingleMovie showAllMovies={this.showAllMovies} singleMovie={this.state.movie} /> }
        {/* <Footer /> */}
      </main>
    )
  }
}

export default App;
