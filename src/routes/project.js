import React from 'react'
import Navbar from "../component/Navbar";
import Heropro from "../component/heropro";
import Footer from "../component/footer";
import Pricecard from '../component/pricecard';

const project = () => {
  return (
  <div>
    <Navbar />
    <Heropro heading="PROJECT." text="Some of my most recent works" />
    <Pricecard />
     <Footer />
  </div>
    
  )
}

export default project