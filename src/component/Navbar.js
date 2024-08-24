import "./navbar.css";
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {

const [click, setclick] = useState(false);
function handelclick() {
    setclick(!click);
    
}

  return (
    <div className="header">
<Link to="/">
<h1>Portfolio</h1> 
</Link>
<ul className="nav-menu" >
    
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/project">Project</Link></li>
    <li><Link to="/contact">Contact</Link></li>
</ul>
<div className='hamburger' onClick={handelclick}>
    {click === true? <FaTimes size={20} style={{color: "#fff"}} /> : <FaBars size={20} style={{color: "#fff"}} />}


</div>
    </div>
  );
}

export default Navbar; 