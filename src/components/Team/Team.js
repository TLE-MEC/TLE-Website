import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import semicircle1 from "../../assets/png/semicircle1.png";
import semicircle2 from "../../assets/png/semicircle2.png";
// import george from "../../assets/png/george.png";
// import nayana from "../../assets/png/nayana.png";
// import achyuth from "../../assets/png/achyuth.png";
// import snehal from "../../assets/png/snehal.png";
import viewmore from "../../assets/svg/viewmore.svg";

import hanna from '../../assets/team/2023-24/Hanna Salam.png';
// import jeswin from '../../assets/team/2023-24/Jeswin Thomas.png';
import sony from '../../assets/team/2023-24/Sony Thomas.png';
// import arathy from '../../assets/team/2023-24/Arathy Sha.png';
// import vignesh from '../../assets/team/2023-24/Vignesh S Naik.png';
import subru from '../../assets/team/2023-24/Subramani E.png';
// import arpitha from '../../assets/team/2023-24/Arpitha Sudhir.png';
import alaka from '../../assets/team/2023-24/Alaka AJ.png'
// import alex from '../../assets/team/2023-24/Alex Mathew Biju.png'
// import adil from '../../assets/team/2023-24/Adil Naz Muhammed.png'
// import neha from '../../assets/team/2023-24/Neha Mariam Mathew.png'


import "./Team.css";

function Team() {
  AOS.init({
    duration: 800,
  });

  return (
    <div className="team" id="team">
      <div className="team__container">
        <img src={semicircle1} className="semicircle1" alt="" />
        <h1 className="section__header">OUR TEAM</h1>
        <div className="Team-imgdiv-Parentdiv">
          <div className="Team-imgdiv">
            <img
              className="hexagon blankhexagon"
              src={hanna}
              alt=""
              data-aos="fade-up"
            />
            <span className="Team-chairpersonParent">
              <img src={sony} className="hexagon" alt="" data-aos="fade-up" />
              {/* <span className="Teampage-overlay hexagon">Chairperson</span> */}
            </span>
          </div>
          <div className="Team-imgdiv">
            <span className="Team-chairpersonParent">
              <img
                className="hexagon"
                src={alaka}
                alt=""
                data-aos="fade-left"
              />
              {/* <span className="Teampage-overlay hexagon">Vice Chairperson</span> */}
            </span>
            <span className="Team-chairpersonParent">
              <img
                className="hexagon"
                src={subru}
                alt=""
                data-aos="fade-down"
              />
              {/* <span className="Teampage-overlay hexagon">CP Head</span> */}
            </span>
            <Link to="/team">
              <img
                className="hexagon viewmore"
                src={viewmore}
                alt=""
                data-aos="fade-right"
              />
            </Link>
          </div>
        </div>
        <img src={semicircle2} className="semicircle2" alt="" />
      </div>
    </div>
  );
}

export default Team;
