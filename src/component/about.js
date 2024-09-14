import React from 'react'
import {Link } from "react-router-dom"
import "./about.css"
import Dp from "../image/IMG_20230829_141346.png";

const  Aboutcontent = () => {
  return (
    <div className='about'> 
    <div className='content'>
        <h1>Who Am I</h1>
        <p>I'm a web developer. I create responsive secure websites </p>
        <Link to="/contact"><button className='btn'>contact</button></Link>
        </div>
        
    </div>
  )
}

export default  Aboutcontent