import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Skeleton from '@mui/material/Skeleton';
import AOS from 'aos'

import coreData from "../../data/coreData";
import execData from "../../data/execData";

import CustomTitle from '../../utils/CustomTitle'
import "./TeamPage.css";

import landing_circle from '../../assets/svg/landing_circle.svg'
import ellipse4 from '../../assets/svg/ellipse1.svg'

function TeamPage() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 3000);
  })

  AOS.init({
    duration: 800,
  })

  return (
    <motion.div 
      className="teamPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <CustomTitle title="Team" />
      <div className='teamPage__header_div'>
        <div className='tp__header_left'>
          <h1>Our Team</h1>
          <button>View</button>
        </div>
        <div className='tp__header_right'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="teamPage__container">
      <img className="team_ellipse4" src={ellipse4} alt="" />
      <img className="team_ellipse1" src={ellipse4} alt="" />
        <div className="team_core">
          <h1 className="team__header">CORE TEAM</h1>
          <div className="team_core_container">
            <div className="team_core_container_1">
              {
                coreData.slice(0, 4).map((data) => (
                  <div className="singleCore" key={data.id} data-aos="fade-up">
                    {loading ? (
                      <Skeleton variant="circular" width={120} height={120} />
                    ) : (
                      <img src={data.image} alt="" loading='lazy'/>
                    )}
                      <h3>{data.name}</h3>
                      <p>{data.title}</p>
                  </div>
                ))
              }
            </div>
            <div className="team_core_container_2">
              {
                coreData.slice(4, 9).map((data) => (
                  <div className="singleCore" key={data.id} data-aos="fade-up">
                    {loading ? (
                      <Skeleton variant="circular" width={120} height={120} />
                    ) : (
                      <img src={data.image} alt="" loading='lazy'/>
                    )}
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
                  <div className="singleCore" key={data.id} data-aos="fade-up">
                    {loading ? (
                      <Skeleton variant="circular" width={120} height={120} />
                    ) : (
                      <img src={data.image} alt="" loading='lazy'/>
                    )}
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
