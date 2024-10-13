import React from 'react';
import "./heropro.css";

// import pic from "./image/IMG_20230829_141346.png"


const Heropro = (props) => {
  return (
    <div className="hero-img">
      <div className="heading">
           <h1>{props.heading}</h1>
            <p>{props.text}</p>
     
        </div>
</div>
);
};

export default Heropro