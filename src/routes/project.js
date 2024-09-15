import React from 'react'
import Navbar from "../component/Navbar";
import Heropro from "../component/heropro";
import Footer from "../component/footer";
//import Pricecard from '../component/pricecard';
import Work from '../component/work';
import '../image/IMG_20230829_141346.png'

const project = () => {
  return (
  <div>
    <Navbar />
    <Heropro heading="PROJECT." text="Some of my most recent works" />
    <Work />
    {/* <Pricecard /> */}
     <Footer />
  </div>
    
  )
}

export default project