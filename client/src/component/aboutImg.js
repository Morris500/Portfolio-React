import React from 'react'
import "./aboutimg.css"



const AboutImg = (props) => {
  return (
    <div className="profile-img">
    <div className='profileimg'>
      <img src={props.src} alt={props.alt}/>
    </div>
   
</div>
  )
}

export default AboutImg