import "./footer.css";
import React from "react";
import {FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";
import { Link } from "react-router-dom";

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
                <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} /> <a href="tel:+2348143044517" > +2348143044517 </a> </h4>

            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} /> <a href="mailto:akunnemorris@gmail.com" >akunnemorris@gmail.com</a> </h4>

            </div>
        </div>
        <div className="right">
            <h4>About the company</h4>
            <p>Hello i am Akunne Morris. A web developer react.js, node.js </p>
            <div className="social">
            <FaGithub size={30} style={{color:"#fff", marginRight: "1rem"}}> <a href="https://github.com/Morris500" >gcg </a> </FaGithub>
            <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}} />
            <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} url="" />
            </div>
        </div>
     </div>
    </div>
  )
}

export default Footer