import React from 'react'
import { useState } from 'react';
import {Link,NavLink, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
import podcast_logo from "../../images/podcast_logo.jpg"
import Search from '../../component/search/Search';
import logo from '../navbar/logo1.png';

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
  <nav className='d-flex navbar ' >
    <img src={logo} alt="" id='logo'/>
    <div className='container'>
        <ul className={isOpen==true?'#navbar active mx-auto animate-slideInRight':'#navbar mx-auto'} id="navbar">
            <div className='menu'>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/about">About us</Link></li> */}
            <li><Link to="/podcast">Podcast</Link></li>
            <li><Link to="/AddAudioForm">Add Podcast</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/search">Search</Link></li>
            </div>

            <div>
              <button className='btn btn-secondary text-right mr-10' id='signin' onClick={gotosignin}>Sign In</button>
            </div>     
        </ul>
    </div>
    <div id="mobile">
        <i id="bar" onClick={handleClick} className={isOpen==true?'fas fa-bars ':'fas fa-times'}></i>
    </div>

   
  </nav>


  )
}

export default Navbar
