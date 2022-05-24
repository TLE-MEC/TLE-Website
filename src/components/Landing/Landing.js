import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { FiPhone } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";

import './Landing.css';

import landing_cubo from '../../assets/svg/landing_cubo.svg'
import landing_circle from '../../assets/svg/landing_circle.svg'
import ellipse1 from '../../assets/svg/ellipse1.svg'
import landing_ellipse from '../../assets/svg/landing_ellipse.svg'

function Landing() {
  return (
    <div className='landing' id='home'>
      <img src={ellipse1} className="ellipse1" alt=""/>
      <div className='landing__container'>
        <div className='landing__left'>
          <p className='welcome'>WELCOME</p>
          <h2>
            Introducing you to the <span className='primary'>Official</span> website of <br className='d-none_mob'/> 
            <span className='primary bold'>TLE MEC.</span>
          </h2>
          <div className='landing__btns'>
            <HashLink to="#resources" className='landing_btn phone_btn' smooth>
              <FiPhone />
              Contact
            </HashLink>
            <HashLink to="#resources" className='landing_btn team_btn' smooth>
              <HiOutlineUserGroup />
              Our Team
            </HashLink>
          </div>
        </div>
        <div className='landing__right'>
          <img src={landing_circle} className="landing_circle" alt=""/>
          <img src={landing_cubo} alt="" className='landing_cubo'/>
        </div>
      </div>
      <img src={landing_ellipse} className="landing_ellipse" alt=""/>
    </div>
  );
}
export default Landing;