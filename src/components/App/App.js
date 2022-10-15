import React, { Component } from "react"
import MovieCardContainer from "../MovieCardContainer/MovieCardContainer"
import SingleMovie from "../SingleMovie/SingleMovie"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './App.css';
import { fetchAllMovieData, fetchSpecificDetails } from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: true,
      movies: [],
      movie: {}
    }
  }

  showAllMovies = () => {
    this.setState({ allMovies: true})
  }

  componentDidMount = () => {
    fetchAllMovieData()
    .then(data => this.setState({movies: data.movies}))
    .catch(err => console.error(err));
  }

  showMovieDetails = (id) => {
    this.setState({ allMovies: false })
    fetchSpecificDetails(id)
    .then(data => this.setState({movie: data.movie}))
    .catch(err => console.error(err));
  }


  render() {
    return(
      <main>
        <Header />
        {this.state.allMovies ? <MovieCardContainer showMovieDetails={this.showMovieDetails} movies={this.state.movies}/> :   <SingleMovie showAllMovies={this.showAllMovies} singleMovie={this.state.movie} /> }
        <Footer />
      </main>
    )
  }
}

export default App;
