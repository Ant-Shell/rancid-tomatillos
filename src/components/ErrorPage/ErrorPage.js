import React from "react";
import "./ErrorPage.css"
import errorImage from "../../assets/ErrorScreen.png"


const ErrorPage = ( {errorMessage}) => {
    return (
      <div className="error-box">
        <h1>Oops! An error occurred while loading.</h1>
        <h2>We'll be back after we change reels!</h2>
        <h2>Error message: {errorMessage}</h2>
        <img className="error-image" src={errorImage} alt="two film canisters with film flowing between them in a fancy loop"></img>
      </div>
    )
}
  
  
export default ErrorPage