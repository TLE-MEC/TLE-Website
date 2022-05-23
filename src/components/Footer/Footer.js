import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
  
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import footer_img from '../../assets/svg/footer.svg'
import footer_logoimg from '../../assets/svg/logo.svg'
import college_logo from '../../assets/svg/college-logo.svg'

function Footer() {
  return (
    <div className='footer'>
      <img src={footer_img} alt='' className='footer_img'/>
       <div className='footer_container'>
         <div className='footer_logoimg'>
           <img src={footer_logoimg} alt=''/>
         </div>
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
            <Link to='/faq' className='footer_faq'>FaQ</Link>
         </div>
         <div className='footer_colglogo'>
           <img src={college_logo} alt=''/>
         </div>
       </div>
    </div>
  )
}

export default Footer