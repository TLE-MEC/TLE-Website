import React from 'react'
import { Link } from 'react-router-dom';

import semicircle1 from "../../assets/png/semicircle1.png";
import semicircle2 from "../../assets/png/semicircle2.png";
import pic1 from "../../assets/svg/pic1.svg";
import pic2 from "../../assets/png/pic2.png";
import viewmore from "../../assets/svg/viewmore.svg";
import blankhexagon from "../../assets/png/blankhexagon.png";
import chairpersonimg from "../../assets/svg/chairpersonimg.svg";

import './Team.css'


function Team() {
  return (
    <div className='team' id='team'>
      <div className='team__container'>
        <img src={semicircle1} className="semicircle1" alt=""/>
        <h1 className='section__header'>OUR TEAM</h1>
        <div className="Team-imgdiv-Parentdiv" fluid>
          <div className="Team-imgdiv">
            <img className="hexagon" src={blankhexagon} alt=""/>
            <span className="Team-chairpersonParent">
              <img src={chairpersonimg} className="hexagon" alt=""/>
              {/* <span className="Teampage-overlay hexagon">Chairperson</span> */}
            </span>
          </div>
          <div className="Team-imgdiv">
            <span className="Team-chairpersonParent">
              <img className="hexagon" src={pic1} alt=""/>
              {/* <span className="Teampage-overlay hexagon">Vice Chairperson</span> */}
            </span>
            <span className="Team-chairpersonParent">
            <img className="hexagon" src={pic2} alt=""/>
              {/* <span className="Teampage-overlay hexagon">CP Head</span> */}
            </span>
            <Link to='/team'>
              <img className="hexagon viewmore" src={viewmore} alt=""/>
            </Link>
          </div>
        </div>
        <img src={semicircle2} className="semicircle2" alt=""/>
      </div>
    </div>
  )
}

export default Team