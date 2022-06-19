import { useState, React } from 'react'
import { Drawer } from '@mui/material';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-scroll';
import AOS from 'aos'

import { useScrollPosition } from '../../hooks/useScrollPosition';

import './Navbar.css';

import logo from '../../assets/svg/logo.svg'
import meclogo from '../../assets/svg/college-logo.svg'


function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobLogo, setMobLogo] = useState(true)

  const scrollPosition = useScrollPosition()

  AOS.init()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const showLogo = () => {
    if (scrollPosition >= 320) {
      setMobLogo(false)
    } else {
      setMobLogo(true)
    }
  }

  window.addEventListener('scroll', showLogo)

  return (
    <div className='navbar'>
      <div className='nav__desktop'>
        <a href="/" >
          <img src={logo} alt="" className='nav_logo' />
        </a>

        <div className='navbar_items'>
          <Link to="about" className='nav_item' spy={true} smooth={true} activeClass="navbar-link-active">
            About
          </Link>
          <Link to="events" className='nav_item' spy={true} smooth={true} activeClass="navbar-link-active">
            Events
          </Link>
          <Link to="resources" className='nav_item' spy={true} smooth={true} activeClass="navbar-link-active">
            Resources
          </Link>
          <Link to="team" className='nav_item' spy={true} smooth={true} activeClass="navbar-link-active">
            Team
          </Link>
          <Link to="contact" className='nav_item' spy={true} smooth={true} activeClass="navbar-link-active" offset={-100}>
            Contact
          </Link>
        </div>
        <a href='https://www.mec.ac.in/' target="_blank" rel="noreferrer">
          <img src={meclogo} alt="" className='meclogo' />
        </a>
      </div>

      <div className='nav__mob'>
        <div className='nav__mob_container'>
          {mobLogo && (
            <a href="/" >
              <img src={logo} alt="" className='nav_logo' />
            </a>
          )}
          <button className='nav_btn' onClick={handleDrawerOpen}>
            <HiOutlineMenuAlt3 className='hamburger' />
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
              <Link to="about" className='nav_item_mob' spy={true} smooth={true}>
                About
              </Link>
              <Link to="events" className='nav_item_mob' spy={true} smooth={true}>
                Events
              </Link>
              <Link to="resources" className='nav_item_mob' spy={true} smooth={true}>
                Resources
              </Link>
              <Link to="team" className='nav_item_mob' spy={true} smooth={true}>
                Team
              </Link>
              <Link to="contact" className='nav_item_mob' spy={true} smooth={true} >
                Contact
              </Link>
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