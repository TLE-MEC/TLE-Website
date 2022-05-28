import React from "react";
import { motion } from 'framer-motion';

import coreData from "../../data/coreData";
import execData from "../../data/execData";

import CustomTitle from '../../utils/CustomTitle'
import "./TeamPage.css";

import landing_circle from '../../assets/svg/landing_circle.svg'
import ellipse4 from '../../assets/svg/ellipse1.svg'

function TeamPage() {

  return (
    <motion.div 
      className="teamPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <CustomTitle title="Team" />
      <img className="team_ellipse4" src={ellipse4} alt="" />
      <img className="team_ellipse1" src={ellipse4} alt="" />
      <div className="teamPage__container">
        <div className="team_core">
          <h1 className="team__header">CORE TEAM</h1>
          <div className="team_core_container">
            <div className="team_core_container_1">
              {
                coreData.slice(0, 4).map((data) => (
                  <div className="singleCore" key={data.id}>
                      <img src={data.image} alt="" />
                      <h3>{data.name}</h3>
                      <p>{data.title}</p>
                  </div>
                ))
              }
            </div>
            <div className="team_core_container_2">
              {
                coreData.slice(4, 9).map((data) => (
                  <div className="singleCore" key={data.id}>
                      <img src={data.image} alt="" />
                      <h3>{data.name}</h3>
                      <p>{data.title}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="team_exec">
          <h1 className="team__header">EXECUTIVE TEAM</h1>
            <div className="team_core_container_1">
              {
                execData.map((data) => (
                  <div className="singleCore" key={data.id}>
                      <img src={data.image} alt="" />
                      <h3>{data.name}</h3>
                  </div>
                ))
              }
            </div>
        </div>
      </div>
      <img src={landing_circle} alt="" className="team_circle" />
    </motion.div>
  );
}

export default TeamPage;
