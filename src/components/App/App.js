import React, { Component } from "react"
import MovieCardContainer from "../MovieCardContainer/MovieCardContainer"
import SingleMovie from "../SingleMovie/SingleMovie"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ErrorPage from "../ErrorPage/ErrorPage";
import LoadingPage from "../LoadingPage/LoadingPage";
import './App.css';
import { fetchAllMovieData } from '../../apiCalls'
import { Route, Switch } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      movieSearchResults: [],
      hasError: false,
      hasSearchResult: true,
      showSearchBar: true
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
        this.setState({ hasError: true })
      }
      console.error(err)});
  }

  findMovieByTitle = (movieTitle) => {
    const foundMovieList = this.state.movies.filter(movie => movie.title.toLowerCase().includes(movieTitle.toLowerCase()))
    if (!foundMovieList.length) {
      this.setState({hasSearchResult: false})
    } else {
      this.setState({movieSearchResults: foundMovieList, hasSearchResult: true})
    }
  }

  clearSearchResults = () => {
    this.setState({movieSearchResults: []})
  }

  hideSearchBar = () => {
    this.setState({showSearchBar: false})
  }

  showSearchBar = () => {
    this.setState({showSearchBar: true})
  }

  render = () => {
    return(
      <main>
        <section className="all-info">
        <Header findMovieByTitle={this.findMovieByTitle} movieSearchResults={this.state.movieSearchResults} 
        clearSearchResults={this.clearSearchResults} hasSearchResult={this.state.hasSearchResult} showSearchBar={this.state.showSearchBar}/>
          <section className="display-container">
            <Switch>
            {!this.state.movies.length && <Route exact path="/" render={() => <LoadingPage /> }/> }
            {this.state.hasError 
            ? <Route exact path="/" render={() => <ErrorPage errorMessage={this.state.errorMessage}/> }/> 
            : <Route exact path="/" render={() => <MovieCardContainer movies={this.state.movies} movieSearchResults={this.state.movieSearchResults} hideSearchBar={this.hideSearchBar}/>  } />}
            <Route exact path="/:id" render={({match}) => <SingleMovie id={match.params.id} showSearchBar={this.showSearchBar} clearSearchResults={this.clearSearchResults}/> } />
            </Switch>
          </section>
        <Footer />
        </section>
      </main>
    )
  }
}

export default App;
