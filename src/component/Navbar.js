import "./navbar.css";
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {

const [click, setclick] = useState(false);
function handelclick() {
    setclick(!click);   
};

const [color, setColor] = useState(false)
//window.addEventListener
document.addEventListener('scroll', changecolor);
function changecolor() {
  if (window.scrollY >= 100  ){
    return setColor(true);
  }else {
    return setColor(false);
  }
};

  return (
    <div className={color === true?"header header-bg":"header"  }>
<Link to="/">
<h1>Portfolio</h1> 
</Link>
<ul className={click ? "nav-menu active": "nav-menu"}  >
     <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/project">Project</Link></li>
    <li><Link to="/contact">Contact</Link></li> 
   
</ul>
<div className='hamburger' onClick={handelclick}>
    {click === true? <FaTimes size={35} style={{color: "#fff"}} /> : <FaBars size={35} style={{color: "#fff"}} />}


</div>
    </div>
  );
}

export default Navbar; 