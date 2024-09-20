import React from 'react'
import Navbar from "../component/Navbar"
import Footer from "../component/footer"
import Aboutcontent from '../component/about';
import Dp from "../image/IMG_20230829_141346.png";
import AboutImg from "../component/aboutImg";

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