import React from 'react'
import {Link } from "react-router-dom"
import "./about.css"
import cv from "../image/AKUNNE CHIWENITE work CV.pdf"

const  Aboutcontent = () => {
  return (
    <div className='about'> 
    <div className='content'>
        <h1>Who Am I</h1>
        <p>I'm a web developer. I create responsive secure websites </p>
        <div className='abtbtn'>
          <a download="AKUNNE-CHIWENITE-WORK-CV.pdf" href={cv}>  <button className='btn1'>Download cv</button> </a>
    
        <Link to="/contact"><button className='btn'>Contact</button></Link>
        </div>
        
        </div>
        
    </div>
  )
}

export default  Aboutcontent