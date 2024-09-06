import React from 'react'
import Navbar from "../component/Navbar"
import Footer from "../component/footer"
import Heropro from '../component/heropro';
import Aboutcontent from '../component/about';


const about = () => {
  return (
    <div>
      <Navbar />
      <Heropro heading="ABOUT." text="I am a Web Developer" />
      <Aboutcontent/>
      <Footer/>
    </div>
  )
}

export default about