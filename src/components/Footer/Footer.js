import React from "react"
import "./Footer.css"
import gitHubIcon from "../../assets/github.png"
import linkedInIcon from "../../assets/linkedin.png"

const Footer = () => {
  return (
    <footer>
      <h3>Contributors:</h3>
      <div className="contributors">
        <div className="anthony">
          <h4>Anthony Shellman:</h4>
          <div className="github">
            <img src={gitHubIcon} alt='github-icon' className='github-icon' />
            <a href="https://github.com/Ant-Shell" className="webLink">GitHub</a>
          </div>
          <div className="linkedin">
            <img src={linkedInIcon} alt='linkedin-icon' className='linkedin-icon' />
            <a href="https://www.linkedin.com/in/anthonyshellman/" className="webLink">LinkedIn</a>
          </div>
        </div>
        <div className="will">
          <h4>Will Hobson:</h4>
          <div className="github">
            <img src={gitHubIcon} alt='github-icon' className='github-icon' />
            <a href="https://github.com/willhobson85" className="webLink">GitHub</a>
          </div>
          <div className="linkedin">
            <img src={linkedInIcon} alt='linkedin-icon' className='linkedin-icon' />
            <a href="https://www.linkedin.com/in/the-william-hobson/" className="webLink">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
