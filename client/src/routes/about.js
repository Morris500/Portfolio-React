import React from 'react'
import Navbar from "../component/Navbar.js"
import Footer from "../component/footer.js"
import Aboutcontent from '../component/about.js';
import Dp from "../image/IMG_20230829_141346.png";
import AboutImg from "../component/aboutImg.js";

const about = () => {
  return (
    <div>
      <Navbar />
      <AboutImg  src={Dp} alt="profile pic"/>
      <Aboutcontent/>
      <Footer/>
    </div>
  )
}

export default about