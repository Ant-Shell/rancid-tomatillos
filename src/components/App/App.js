import React, { Component } from "react"
import MovieCardContainer from "../MovieCardContainer/MovieCardContainer"
import SingleMovie from "../SingleMovie/SingleMovie"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './App.css';
import { fetchAllMovieData, fetchSpecificDetails } from '../../apiCalls'
import { Route, Switch } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      movie: {}
    }
  }

  componentDidMount = () => {
    fetchAllMovieData()
    .then(data => this.setState({movies: data.movies}))
    .catch(err => console.error(err));
  }

  showMovieDetails = (id) => {
    fetchSpecificDetails(id)
    .then(data => {
     this.setState({movie: data.movie})})
    .catch(err => console.error(err));
  }

  render = () => {
    return(
      <main>
        <Header />
          <div className="view-wrapper">
            <Switch>
            <Route exact path="/" render={() => <MovieCardContainer showMovieDetails={this.showMovieDetails} movies={this.state.movies}/> } />
            <Route exact path="/:id" render={({match}) => <SingleMovie movie={this.state.movie} /> } /> 
            </Switch>
          </div>
        <Footer />
      </main>
    )
  }
}

export default App;
