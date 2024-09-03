import React from 'react';
import './workcard.css';
import Workcard from './workcard';
import ProjectCardData from './workcaddata';


const Work = () => {
  return (
    <div className='work-container'>
       <h1 className='project-heading'>projects</h1>
       <div className='project-container'>
       {ProjectCardData.map((value, index)=> {
        return(
            <Workcard 
            key={index}
            imgsrc={value.imgsrc}
            title={value.title}
            text={value.text}
            view={value.view}
            view2={value.view2}
            />
        )
       })}
    
       </div>
    </div>
  )
}

export default Work