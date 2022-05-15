import { useState, React } from 'react'
import { HashLink } from 'react-router-hash-link';
import useWindowDimensions from '../../utils/WindowDimension'

import './Navbar.css';

import logo from '../../assets/png/logo.png'
import meclogo from '../../assets/png/meclogo.png'


function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo' />

      <button className="hamburger" onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className={isNavExpanded ? "side-nav" : "navbar-items"}>
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