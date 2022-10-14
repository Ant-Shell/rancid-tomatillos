import React, { Component } from "react"
import movieData from "../../movieData"
import MovieCardContainer from "../MovieCardContainer/MovieCardContainer"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
  }



  render() {
    return(
      <main>
        {/* <Header /> */}
        <MovieCardContainer movies={this.state.movies}/>
        {/* <Footer /> */}
      </main>
    )
  }
}

export default App;
