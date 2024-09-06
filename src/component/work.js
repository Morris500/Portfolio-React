import React from 'react';
import './workcard.css';
import Workcard from './workcard';
import ProjectCardData from './workcaddata';
import "../image/IMG_20230829_141346.png"

const Work = () => {
  return (
    <div>
       {ProjectCardData.map((value, index)=> {
         
        return(
        <> 
            <Workcard 
            key={index}
            imgsrc={value.imgsrc}
            title={value.title}
            text={value.text}
            view={value.view}
            view2={value.view2}
            />
            {console.log(value.text)}
       </> )
       })}
    
       </div>
    
  )
}

export default Work