import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Skeleton from "@mui/material/Skeleton";
import AOS from "aos";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import coreData from "../../data/coreData";
import core21Data from "../../data/core21Data";
import { team21 } from "../../data/team21Data.js";
import { team } from "../../data/teamData.js";
import execData from "../../data/execData";

import CustomTitle from "../../utils/CustomTitle";
import "./TeamPage.css";

import landing_circle from "../../assets/svg/landing_circle.svg";
import ellipse4 from "../../assets/svg/ellipse1.svg";
 import TeamMember from "../../components/Team/TeamMember";

function TeamPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  AOS.init({
    duration: 800,
  });

  return (
    <motion.div
      className="teamPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <CustomTitle title="Team" />
      <FiArrowLeft onClick={goBack} className="goBack" />
      <div className="teamPage__header_div">
        <div className="tp__header_left">
          <h1>
            Our <span className="primary">Team</span>
          </h1>
          <HashLink to="#core" smooth>
            <button>View</button>
          </HashLink>
        </div>
        <div className="tp__header_right">
          <p>
            TLE MEC is made by its people. The events, contests and sessions are
            all but a product of their teamwork. And here they are for you to
            see, the current torch bearers of the year 2022-23.
          </p>
        </div>
      </div>
      <div className="teamPage__container">
        <img className="team_ellipse4" src={ellipse4} alt="" />
        <img className="team_ellipse1" src={ellipse4} alt="" />
        <div className="team_core" id="core">
          <h1 className="team__header">CORE TEAM</h1>
          <div className="team_core_container">
            <div className="team_core_container_1">
              {coreData.slice(0, 3).map((data) => (
                <div className="singleCore" key={data.id} data-aos="fade-up">
                  {loading ? (
                    <Skeleton variant="circular" width={120} height={120} />
                  ) : (
                    <>
                      <img src={data.image} alt="" loading="lazy" />
                      {data.linkedIn && (
                        <a
                          href={data.linkedIn}
                          target="_blank"
                          rel="noreferrer"
                          className="core_linkedin"
                        >
                          <FaLinkedinIn
                            color="#ffffff"
                            size={18}
                            className="linkedin"
                          />
                        </a>
                      )}
                    </>
                  )}
                  <h3>{data.name}</h3>
                  <p>{data.title}</p>
                </div>
              ))}
            </div>
            <div className="team_core_container_2">
              {coreData.slice(3, 7).map((data) => (
                <div className="singleCore" key={data.id} data-aos="fade-up">
                  {loading ? (
                    <Skeleton variant="circular" width={120} height={120} />
                  ) : (
                    <>
                      <img src={data.image} alt="" loading="lazy" />
                      <a
                        href={data.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="core_linkedin"
                      >
                        <FaLinkedinIn
                          color="#ffffff"
                          size={18}
                          className="linkedin"
                        />
                      </a>
                    </>
                  )}
                  <h3>{data.name}</h3>
                  <p>{data.title}</p>
                </div>
              ))}
            </div>
            <div className="team_core_container_3">
              {coreData.slice(7, 12).map((data) => (
                <div className="singleCore" key={data.id} data-aos="fade-up">
                  {loading ? (
                    <Skeleton variant="circular" width={120} height={120} />
                  ) : (
                    <>
                      <img src={data.image} alt="" loading="lazy" />
                      <a
                        href={data.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="core_linkedin"
                      >
                        <FaLinkedinIn
                          color="#ffffff"
                          size={18}
                          className="linkedin"
                        />
                      </a>
                    </>
                  )}
                  <h3>{data.name}</h3>
                  <p>{data.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="tp_teammemberdiv">
          <div>
            <h1 className="team__header">TEAM MEMBERS</h1>
          </div>
          <TeamMember team={team}/>
        </div>
      </div>
      <img src={landing_circle} alt="" className="team_circle" />

      <div className="teamPage__container">
        <img className="team_ellipse4" src={ellipse4} alt="" />
        <img className="team_ellipse1" src={ellipse4} alt="" />
        <div className="team_core" id="core">
          <h1 className="team__header">EX-CORE TEAM (2021-22)</h1>
          <div className="team_core_container">
            <div className="team_core_container_1">
              {core21Data.slice(0, 4).map((data) => (
                <div className="singleCore" key={data.id} data-aos="fade-up">
                  {loading ? (
                    <Skeleton variant="circular" width={120} height={120} />
                  ) : (
                    <>
                      <img src={data.image} alt="" loading="lazy" />
                      {data.linkedIn && (
                        <a
                          href={data.linkedIn}
                          target="_blank"
                          rel="noreferrer"
                          className="core_linkedin"
                        >
                          <FaLinkedinIn
                            color="#ffffff"
                            size={18}
                            className="linkedin"
                          />
                        </a>
                      )}
                    </>
                  )}
                  <h3>{data.name}</h3>
                  <p>{data.title}</p>
                </div>
              ))}
            </div>
            <div className="team_core_container_2">
              {core21Data.slice(4, 9).map((data) => (
                <div className="singleCore" key={data.id} data-aos="fade-up">
                  {loading ? (
                    <Skeleton variant="circular" width={120} height={120} />
                  ) : (
                    <>
                      <img src={data.image} alt="" loading="lazy" />
                      <a
                        href={data.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="core_linkedin"
                      >
                        <FaLinkedinIn
                          color="#ffffff"
                          size={18}
                          className="linkedin"
                        />
                      </a>
                    </>
                  )}
                  <h3>{data.name}</h3>
                  <p>{data.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="team_exec">
          <h1 className="team__header">EX-EXECUTIVE TEAM (2021-22)</h1>
          <div className="team_core_container_1">
            {execData.map((data) => (
              <div className="singleCore" key={data.id} data-aos="fade-up">
                {loading ? (
                  <Skeleton variant="circular" width={120} height={120} />
                ) : (
                  <>
                    <img src={data.image} alt="" loading="lazy" />
                    <a
                      href={data.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                      className="core_linkedin"
                    >
                      <FaLinkedinIn
                        color="#ffffff"
                        size={18}
                        className="linkedin"
                      />
                    </a>
                  </>
                )}
                <h3>{data.name}</h3>
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="tp_teammemberdiv">
          <div>
            <h1 className="team__header">EX-TEAM MEMBERS (2021-22)</h1>
          </div>
          <TeamMember team={team21}/>
        </div>
      </div>
    </motion.div>
  );
}

export default TeamPage;
