import React from "react";
import { HashLink } from "react-router-hash-link";
import { FiPhone } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { motion } from "framer-motion";
import AOS from "aos";

import "./Landing.css";

import landing_cubo from "../../assets/svg/landing_cubo.svg";
import landing_circle from "../../assets/svg/landing_circle.svg";
import ellipse1 from "../../assets/svg/ellipse1.svg";
import landing_ellipse from "../../assets/svg/landing_ellipse.svg";

function Landing() {
  AOS.init({
    duration: 800,
  });

  return (
    <div className="landing" id="home">
      <img src={ellipse1} className="ellipse1" alt="" />
      <div className="landing__container">
        <div className="landing__left" data-aos="zoom-in">
          <p className="welcome">WELCOME</p>
          <h2>
            Navigate your path to being an ace{" "}
            <span className="primary">Problem-Solver</span> with{" "}
            <span className="primary bold">TLE MEC.</span>
          </h2>
          <div className="landing__btns">
            <HashLink to="#contact" className="landing_btn phone_btn" smooth>
              <FiPhone className="landing_btn__icon" />
              Contact Us
            </HashLink>
            <HashLink to="#team" className="landing_btn team_btn" smooth>
              <HiOutlineUserGroup className="landing_btn__icon" />
              <span className="d-none_mob">Meet</span> Our Team
            </HashLink>
          </div>
        </div>
        <div className="landing__right">
          <img src={landing_circle} className="landing_circle" alt="" />
          <motion.img
            // data-aos="zoom-in"
            src={landing_cubo}
            alt=""
            className="landing_cubo"
            drag
            dragConstraints={{
              top: -200,
              left: -200,
              right: 200,
              bottom: 200,
            }}
          />
        </div>
      </div>
      <img src={landing_ellipse} className="landing_ellipse" alt="" />
    </div>
  );
}
export default Landing;
