import { useState, React } from 'react'
import { HashLink } from 'react-router-hash-link';
import { Drawer, IconButton } from '@mui/material';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import './Navbar.css';

import logo from '../../assets/svg/logo.svg'
import meclogo from '../../assets/svg/college-logo.svg'
import { Link } from 'react-router-dom';


function Navbar() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(!open)
  };
  return (
    <div className='navbar'>
      <div className='nav__desktop'>
        <Link to='/'>
          <img src={logo} alt="" className='nav_logo' />
        </Link>

        <div className='navbar_items'>
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
        <a href='https://www.mec.ac.in/' target="_blank" rel="noreferrer">
          <img src={meclogo} alt="" className='meclogo' />
        </a>
      </div>

      <div className='nav__mob'>
        <div className='nav__mob_container'>
          <Link to='/'>
            <img src={logo} alt="" className='nav_logo' />
          </Link>
          <IconButton onClick={toggleDrawer}>
            <HiOutlineMenuAlt3 className='hamburger'/>
          </IconButton>
        </div>
      </div>
      <Drawer
        open={open}
        onClose={toggleDrawer}
        disableScrollLock
      >
        
      </Drawer>
    </div>


  )
}

export default Navbar