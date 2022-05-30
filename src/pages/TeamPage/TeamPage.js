import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Skeleton from '@mui/material/Skeleton';
import AOS from 'aos'
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

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

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/')
  }

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
      <FiArrowLeft onClick={goBack} className="goBack"/>
      <div className='teamPage__header_div'>
        <div className='tp__header_left'>
          <h1>Our <span className="primary">Team</span></h1>
          <HashLink to="#core" smooth>
            <button>View</button>
          </HashLink>
          
        </div>
        <div className='tp__header_right'>
          <p>
            TLE MEC is made not by its projects, its events or the hackathons, but by its people. Here is the team behind this vision who are the current torch bearers of the chapter for the 2021-22 term.
          </p>
        </div>
      </div>
      <div className="teamPage__container">
      <img className="team_ellipse4" src={ellipse4} alt="" />
      <img className="team_ellipse1" src={ellipse4} alt="" />
        <div className="team_core" id='core'>
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
