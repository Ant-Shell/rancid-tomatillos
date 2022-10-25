import React from "react";
import "./InvalidLink.css"
import incorrectAddress from "../../assets/travolta.gif"
import { Link } from "react-router-dom"


const InvalidLink = () => {
    return (
      <div className="invalid-page-box">
        <h2>Oops! You've taken a wrong turn.</h2>
        <h3>Please check the address and try again!</h3>
        <img className="invalid-link-image" src={incorrectAddress} alt="John Travolta looking around a room, seeming lost"></img>
        <Link to="/"><button>View All Movies</button></Link>
      </div>
    )
}
  
  
export default InvalidLink