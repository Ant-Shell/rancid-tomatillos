import React, { Component } from "react"
import "./MovieSearch"

class MovieSearch extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
    }
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitSearch = (event) => {
    event.preventDefault()
    this.props.findMovieByTitle(this.state.title)
    this.clearInput()
  }

  clearInput = () => {
    this.setState({title: ''})
  }

  clearSearch = (event) => {
    event.preventDefault()
    this.props.clearSearchResults()
  }

  render = () => {
    return (
      <form>
        <input 
          type="text"
          name="title"
          placeholder={!this.props.movieSearchResults.length && "Search movie titles"}
          value={this.state.title}
          disabled={this.props.movieSearchResults.length}
          onChange={(event) => this.changeHandler(event)}
        />
       { this.props.movieSearchResults.length ?
       <button onClick={(event) => this.clearSearch(event)}>Clear Search</button> :
       <button disabled={!this.state.title} onClick={(event) => this.submitSearch(event)}>Search</button>}
      </form> 
    )
  }
}

export default MovieSearch