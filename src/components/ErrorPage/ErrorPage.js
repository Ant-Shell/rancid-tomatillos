import React from "react";
import "./ErrorPage.css"
import "../../assets/ErrorScreen.png"


const ErrorPage = () => {
    return (
      <div>
        <h1>Oops! An error occurred while loading.</h1>
        <h2>We'll be back after we change reels!</h2>
        <img className="error-image" src="../../assets/ErrorScreen.png" alt="two film canisters with film flowing between them in a fancy loop"></img>
      </div>
    )
}
  
  
export default ErrorPage