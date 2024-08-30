import React from 'react'
import Navbar from "../component/Navbar"
import Footer from "../component/footer"
import Heropro from '../component/heropro'

const contact = () => {
  return (
    <div>
       <Navbar />
       <Heropro heading="CONTACT." text="Let's have a chat" />
       <Footer/>
    </div>
  )
}

export default contact