import React from 'react';
import './workcard.css';
import { Link } from "react-router-dom";

const Workcard = () => {
  return (
    <div className='work-container'>
       <h1 className='project-heading'>projects</h1>
       <div className='project-container'>
        <div className='projeect-card'>
            <img src='' alt= "project picture" />
            <h2 className='project-title'>Project Title</h2>
            <div className='pro-details'>
                <p>This is text</p>
                <div className='pro-btns'>
                    <Link to='' className='btn'>View</Link>
                    <Link to='' className='btn'>Source</Link>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Workcard