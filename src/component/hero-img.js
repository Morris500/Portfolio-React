import "./hero-img.css";
import { Link } from "react-router-dom";
import React from 'react'

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src="" alt="Intro-img"/>
            </div>
            <div className="content">
                <p>HI, I'M A FREELANCER.</p>
                <h1>React Developer.</h1>
                <div >
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contacts</Link>

                </div>
            </div>
    </div>
  )
}

export default Hero



