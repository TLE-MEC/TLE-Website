import { useState, React } from 'react'
import { HashLink } from 'react-router-hash-link';
import { Drawer } from '@mui/material';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router-dom';
import AOS from 'aos'

import './Navbar.css';

import logo from '../../assets/svg/logo.svg'
import meclogo from '../../assets/svg/college-logo.svg'



function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobLogo, setMobLogo] = useState(true)

  AOS.init()

  const handleDrawerOpen = () => {
      setOpen(true);
  };

  const handleDrawerClose = () => {
      setOpen(false);
  };

  const showLogo = () => {
    if(window.scrollY >= 80) {
      setMobLogo(false)
    } else {
      setMobLogo(true)
    }
  }

  window.addEventListener('scroll', showLogo)

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
          {mobLogo && (
            <Link to='/'>
              <img src={logo} alt="" className='nav_logo' />
            </Link>
          )}
          <button className='nav_btn' onClick={handleDrawerOpen}>
            <HiOutlineMenuAlt3 className='hamburger'/>
          </button>
          
        </div>
      </div>
      <Drawer
        open={open}
        disableScrollLock={false}
        onClick={handleDrawerClose}
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
              handleDrawerClose();
          } else if (reason !== 'escapeKeyDown') {
              handleDrawerClose();
          }
        }}
        
        anchor="left"
        PaperProps={{
          sx: {
            backgroundColor: "#FFFFFF",
            boxShadow: "3px 0px 6px rgba(0, 0, 0, 0.25)",
            height: '100vh'
          }
        }}
        sx={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(5px)'
        }}
      >
        <div className='nav__drawer'>

          <div className='nav__drawer_header'>
            <Link to='/team' data-aos='slide-down' data-aos-duration='600'>
              <img src={logo} alt="" className='nav_logo' />
            </Link>
            <div className='navbar_items_mob'>
              <HashLink to="#home" className='nav_item_mob' smooth data-aos='fade-right' data-aos-duration='200'>
                Home
              </HashLink>
              <HashLink to="#about" className='nav_item_mob' smooth data-aos='fade-right' data-aos-duration='600'>
                About
              </HashLink>
              <HashLink to="#events" className='nav_item_mob' smooth data-aos='fade-right' data-aos-duration='1000'>
                Events
              </HashLink>
              <HashLink to="#resources" className='nav_item_mob' smooth data-aos='fade-right' data-aos-duration='1400'>
                Resources
              </HashLink>
              <HashLink to="#team" className='nav_item_mob' smooth data-aos='fade-right' data-aos-duration='1600'>
                Team
              </HashLink>
            </div>
          </div>
          <a href='https://www.mec.ac.in/' target="_blank" rel="noreferrer" >
            <img src={meclogo} alt="" className='meclogo__mob' />
          </a>
        </div>
      </Drawer>
    </div>


  )
}

export default Navbar