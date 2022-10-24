import React from "react"
import "./Header.css"
import AWLogo from "../../assets/AWFilmReviews-Transparent.png"

const Header = () => {
  return (
    <header>
      <img src={AWLogo} alt='logo for A&W Movie Time' className='logo' />
      <h1>A&W Movie Time</h1>
    </header>
  )
}

export default Header