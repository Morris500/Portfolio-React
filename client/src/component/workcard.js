import React from 'react';
import './workcard.css';
import { Link } from "react-router-dom";
import  "../image/IMG_20230829_141346.png"

const Workcard = (props) => {
  return (
    <div className='work-container'>
       
       <div className='project-container'>
        <div className='project-card'>
            <img src={props.src} alt= "project pic" />
            <h2 className='project-title'>{props.title}</h2>
            <div className='pro-details'>
                <p> {props.text}  </p>
                <div className='pro-btns'>
                    <Link to={props.view} className='btn'>View</Link>
                    <Link to={props.view2} className='btn'>Source</Link>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Workcard 