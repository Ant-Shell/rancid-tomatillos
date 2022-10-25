import React from "react";
import "./ErrorPage.css"
import errorImage from "../../assets/ErrorScreen.png"
import { Link } from "react-router-dom"


const ErrorPage = () => {
    return (
      <div className="error-box">
        <h2>Oops! An error occurred while loading.</h2>
        <h3>We'll be back after we change reels!</h3>
        <img className="error-image" src={errorImage} alt="two film canisters with film flowing between them in a fancy loop"></img>
        <Link to="/"><button>View All Movies</button></Link>
      </div>
    )
}
  
  
export default ErrorPage