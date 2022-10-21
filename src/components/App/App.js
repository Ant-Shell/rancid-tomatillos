import React, { Component } from "react"
import MovieCardContainer from "../MovieCardContainer/MovieCardContainer"
import SingleMovie from "../SingleMovie/SingleMovie"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './App.css';
import { fetchAllMovieData } from '../../apiCalls'
import { Route, Switch } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
    }
  }

  componentDidMount = () => {
    fetchAllMovieData()
    .then(data => this.setState({movies: data.results}))
    .catch(err => console.error(err));
  }

  render = () => {
    return(
      <main>
        <Header />
          <div className="view-wrapper">
            <Switch>
            <Route exact path="/" render={() => <MovieCardContainer movies={this.state.movies} /> } />
            <Route exact path="/:id" render={({match}) => <SingleMovie id={match.params.id}/> } />
            </Switch>
          </div>
        <Footer />
      </main>
    )
  }
}

export default App;
