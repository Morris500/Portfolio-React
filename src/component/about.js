import React from 'react'
import {Link } from "react-router-dom"
import "./about.css"

const  Aboutcontent = () => {
  return (
    <div className='about'> 
    <div className='left'>
        <h1>Who Am I</h1>
        <p>I'm a web developer. I create responsive secure websites </p>
        <Link to="/contact"><button className='btn'>contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stacktop'>
                    <img src='' className='img' alt=''/>
                </div>
                <div className='img-stacktop'>
                    <img src='' className='img' alt=''/>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default  Aboutcontent