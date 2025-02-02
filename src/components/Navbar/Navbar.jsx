import React from 'react'
import '../Navbar/Navbar.css'

import logo from '../../assets/32px-R_logo.svg.png'

function Navbar() {
  return (
    <div className='navbar'> 
    <img src={logo} alt="" />
    <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
    </ul>
    <div className="nav-connect">Connect With Me</div>
    
    </div>
  )
}

export default Navbar