import React from 'react';

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
       <div className='footer-img'>
         <img src={footer_img} alt='' />
       </div>
       <div className='footer-container'>
         <div className='footer-logoimg'>
           <img src={footer_logoimg} alt=''/>
         </div>
         <div className='footer-body'>
            <h4>Contact Us</h4>
            <div className='footer-icons'>
              <div className='social-icons'>
                <FaYoutube />
              </div>
              <div className='social-icons'>
                <FaInstagram />
              </div>
              <div className='social-icons'>
                <FaLinkedin />
              </div>   
            </div>
            <h5>FaQ</h5>
         </div>
         <div className='footer-colglogo'>
           <img src={college_logo} alt=''/>
         </div>
       </div>
    </div>
  )
}

export default Footer