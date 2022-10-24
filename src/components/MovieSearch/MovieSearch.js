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

  render = () => {
    return (
      <form>
        <input 
          type="text"
          name="title"
          placeholder="Search movie titles"
          value={this.state.title}
          onChange={(event) => this.changeHandler(event)}
        />
        <button onClick={(event) => this.submitSearch(event)}>Search</button>
      </form> 
    )
  }
}

export default MovieSearch