import "./footer.css";
import React, {useState} from "react";
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

const Footer = () => {


  return (
    <div className="footer">
        <div className="footer-container">
           <div className="left">
             <div className="location">
               <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}} />
              <div>
                <p>jikwoyi phase2 Abuja.</p>
                <p>FCT.</p>
                </div>     
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} /> +234-1234-5678 </h4>

            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} /> akunnemorris@gmail.com </h4>

            </div>
        </div>
        <div className="right">
            <h4>About the company</h4>
            <p>Hello i am Akunne Morris. A web developer react.js, node.js </p>
            <div className="social">
            <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
            <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}} />
            <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
            </div>
        </div>
     </div>
    </div>
  )
}

export default Footer