import React from 'react'
import { useState } from 'react';
import {Link,NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'


function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

const handleClick = e => {
  e.preventDefault();
  setIsOpen(!isOpen);
  console.log(isOpen);
};


  return (
  <nav className='d-flex navbar' >

    <a href='#' className='text-white'>Navbar</a>
    <div className='container'>
        <ul className={isOpen==true?'#navbar active mx-auto animate-slideInRight':'#navbar mx-auto'} id="navbar">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Find a doctor</a></li>
            <li><a href="#">Search</a></li>
        </ul>
    </div>
    <div id="mobile">
        <i id="bar" onClick={handleClick} className={isOpen==true?'fas fa-bars ':'fas fa-times'}></i>
      
    </div>
  </nav>


  )
}

export default Navbar
