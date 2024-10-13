import React from 'react'
import Navbar from "../component/Navbar.js"
import Footer from "../component/footer.js"
import Heropro from '../component/heropro.js'
import Form from "../component/contact.js";

const contact = () => {
  return (
    <div>
       <Navbar />
       <Heropro heading="CONTACT." text="Let's have a chat" />
       <Form />
       <Footer/>
    </div>
  )
}

export default contact