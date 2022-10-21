import React, { Component } from "react"
import MovieCardContainer from "../MovieCardContainer/MovieCardContainer"
import SingleMovie from "../SingleMovie/SingleMovie"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ErrorPage from "../ErrorPage/ErrorPage";
// import LoadingPage from "../LoadingPage/LoadingPage";
import './App.css';
import { fetchAllMovieData } from '../../apiCalls'
import { Route, Switch } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      errorMessage: null
    }
  }

  componentDidMount = () => {
    Promise.all([fetchAllMovieData(1), fetchAllMovieData(2), fetchAllMovieData(3)])
    .then(data => {
      const allMovies = data.reduce((acc, movie) => {
      acc.push(movie.results)
      return acc
    }, []).flat()
    this.setState({movies: allMovies})})
    .catch(err => {
      if (err) {
        this.setState({ errorMessage: err })
      }
      console.error(err)});
  }

  render = () => {
    return(
      <main>
        <Header />
          <div className="view-wrapper">
            <Switch>
            {this.state.errorMessage !== null 
            ? <Route exact path="/" render={() => <ErrorPage /> }/> 
            : <Route exact path="/" render={() => <MovieCardContainer movies={this.state.movies} /> } />}
            <Route exact path="/:id" render={({match}) => <SingleMovie id={match.params.id}/> } />
            </Switch>
          </div>
        <Footer />
      </main>
    )
  }
}

export default App;
