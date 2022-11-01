import React from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos'

import semicircle1 from "../../assets/png/semicircle1.png";
import semicircle2 from "../../assets/png/semicircle2.png";
import george from "../../assets/png/george.png";
import nayana from "../../assets/png/nayana.png";
import achyuth from "../../assets/png/achyuth.png";
import snehal from "../../assets/png/snehal.png"
import viewmore from "../../assets/svg/viewmore.svg";

import './Team.css'


function Team() {

  AOS.init({
    duration: 800,
  })

  return (
    <div className='team' id='team'>
      <div className='team__container'>
        <img src={semicircle1} className="semicircle1" alt="" />
        <h1 className='section__header'>OUR TEAM</h1>
        <div className="Team-imgdiv-Parentdiv">
          <div className="Team-imgdiv">
            <img className="hexagon blankhexagon" src={nayana} alt="" data-aos="fade-up" />
            <span className="Team-chairpersonParent">
              <img src={george} className="hexagon" alt="" data-aos="fade-up" />
              {/* <span className="Teampage-overlay hexagon">Chairperson</span> */}
            </span>
          </div>
          <div className="Team-imgdiv">
            <span className="Team-chairpersonParent">
              <img className="hexagon" src={snehal} alt="" data-aos="fade-left" />
              {/* <span className="Teampage-overlay hexagon">Vice Chairperson</span> */}
            </span>
            <span className="Team-chairpersonParent">
              <img className="hexagon" src={achyuth} alt="" data-aos="fade-down" />
              {/* <span className="Teampage-overlay hexagon">CP Head</span> */}
            </span>
            <Link to='/team'>
              <img className="hexagon viewmore" src={viewmore} alt="" data-aos="fade-right" />
            </Link>
          </div>
        </div>
        <img src={semicircle2} className="semicircle2" alt="" />
      </div>
    </div>
  )
}

export default Team