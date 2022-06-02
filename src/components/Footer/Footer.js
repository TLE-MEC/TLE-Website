import React from 'react';
import './Footer.css'
  
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
       <div className='footer_container'>
          <div className="footer_left">
            <h1>Stay Updated</h1>
            <p>
              Want to stay updated with the latest news about TLE MEC? Enter your email address and allow notifications.
            </p>

            <div className='footer_input_div'>
              <input type="text" placeholder='Enter your email' className='footer_input'/>
              <button>Get Updates</button>
            </div>
          </div>  
          <div className="footer_right">
            
          </div>  
       </div>
    </div>
  )
}

export default Footer