import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Footer.css'
  
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import footer_img from '../../assets/svg/footer.svg'
import footer_logoimg from '../../assets/svg/logo.svg'
import mec_notext from '../../assets/svg/mec_notext.svg'

function Footer() {
  return (
    <div className='footer'>
      <img src={footer_img} alt='' className='footer_img'/>
       <div className='footer_container'>
         <HashLink to='#home' smooth>
          <img src={footer_logoimg} alt='' className='footer_logoimg'/>
         </HashLink>
         <div className='footer_body'>
            <h4>Contact Us</h4>
            <div className='footer_icons'>
              <a href='https://www.youtube.com/' target="_blank" rel="noreferrer" className='social_icons'>
                <FaYoutube />
              </a>
              <a href='https://www.instagram.com/tle.mec/' target="_blank" rel="noreferrer" className='social_icons'>
                <FaInstagram />
              </a>
              <a href='https://www.linkedin.com/' target="_blank" rel="noreferrer" className='social_icons'>
                <FaLinkedin />
              </a>   
            </div>
         </div>
          <a href='https://www.mec.ac.in/' target="_blank" rel="noreferrer">
            <img src={mec_notext} alt='' className='footer_colglogo'/>
          </a>
          
       </div>
    </div>
  )
}

export default Footer