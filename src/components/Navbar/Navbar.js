import React from 'react'
import { HashLink } from 'react-router-hash-link';

import './Navbar.css';

import logo from '../../assets/png/logo.png'
import meclogo from '../../assets/png/meclogo.png'


function Navbar() {
  return (

    <div className='navbar'>
      <img src={logo} alt="" className='logo' />
      <div className='navbar-items'>
        <HashLink to="#home" className='nav_item' smooth>
          Home
        </HashLink>
        <HashLink to="#about" className='nav_item' smooth>
          About
        </HashLink>
        <HashLink to="#events" className='nav_item' smooth>
          Events
        </HashLink>
        <HashLink to="#resources" className='nav_item' smooth>
          Resources
        </HashLink>
        <HashLink to="#team" className='nav_item' smooth>
          Team
        </HashLink>
      </div>
      <img src={meclogo} alt="" className='meclogo' />
    </div>

  )
}

export default Navbar