import React from 'react'
import { useState } from 'react';
import {Link,NavLink, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'


function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
const handleClick = e => {
  e.preventDefault();
  setIsOpen(!isOpen);
  console.log(isOpen);
};

function gotosignin(){
  navigate('/signin')
}
  return (
  <nav className='d-flex navbar fixed-top' >

    <a href='#' className='text-white'>Navbar</a>
    <div className='container'>
        <ul className={isOpen==true?'#navbar active mx-auto animate-slideInRight':'#navbar mx-auto'} id="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/podcast">Podcast</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
        </ul>
    </div>
    <div>
      <button className='btn btn-secondary text-right mr-10' onClick={gotosignin}>Sign In</button>
    </div>

    <div id="mobile">
        <i id="bar" onClick={handleClick} className={isOpen==true?'fas fa-bars ':'fas fa-times'}></i>
      
    </div>
  </nav>


  )
}

export default Navbar
