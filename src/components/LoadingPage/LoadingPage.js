import React from "react";
import "./LoadingPage.css"
import countDown from "../../assets/Countdown.gif"


const LoadingPage = () => {
    return (
      <div>
        <h2>Stay tuned for our feature presentation...</h2>
        <img className="error-image" src={countDown} alt="film reel countdown from 3 to 1"></img>
      </div>
    )
}
  
  
export default LoadingPage