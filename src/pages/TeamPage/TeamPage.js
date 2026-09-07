import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Skeleton from "@mui/material/Skeleton";
import AOS from "aos";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import * as y2026 from "../../data/years/2026_27";
import * as y2025 from "../../data/years/2025_26";
import * as y2024 from "../../data/years/2024_25";
import * as y2023 from "../../data/years/2023_24";
import * as y2022 from "../../data/years/2022_23";
import * as y2021 from "../../data/years/2021_22";

import CustomTitle from "../../utils/CustomTitle";
import "./TeamPage.css";
import landing_circle from "../../assets/svg/landing_circle.svg";
import ellipse4 from "../../assets/svg/ellipse1.svg";
import TeamMember from "../../components/Team/TeamMember";

const yearsData = [y2026, y2025, y2024, y2023, y2022, y2021];

function CoreMember({ data, loading, avatarClass }) {
  return (
    <div className="singleCore" data-aos="fade-up">
      {loading ? (
        <Skeleton variant="circular" width={120} height={120} />
      ) : (
        <>
          <img
            src={data.image}
            alt=""
            loading="lazy"
            className={avatarClass}
          />
          {data.linkedIn && (
            <a
              href={data.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="core_linkedin"
            >
              <FaLinkedinIn color="#ffffff" size={18} className="linkedin" />
            </a>
          )}
        </>
      )}
      <h3>{data.name}</h3>
      <p>{data.title}</p>
    </div>
  );
}

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
            see, the current torch bearers of the year 2026-27.
          </p>
        </div>
      </div>

      {yearsData.map((year) => {
        const hasCore = year.core && year.core.length > 0;
        const hasTeams = year.teams && year.teams.length > 0;
        const hasExec = year.exec && year.exec.length > 0;

        if (!hasCore && !hasTeams && !hasExec) {
          return null;
        }

        const prefix = year.isCurrent ? "" : "EX-";
        const yearSuffix = year.isCurrent ? "" : `(${year.year})`;

        return (
          <React.Fragment key={year.year}>
            <div className="teamPage__container">
              <img className="team_ellipse4" src={ellipse4} alt="" />
              <img className="team_ellipse1" src={ellipse4} alt="" />
              {hasCore && (
                <div className="team_core" id="core">
                  <h1 className="team__header">
                    {prefix}CORE TEAM {yearSuffix}
                  </h1>
                  <div className="team_core_container">
                    {(
                      year.coreSlices && year.coreSlices.length
                        ? year.coreSlices
                        : [[0, year.core.length]]
                    ).map((slice, i) => (
                      <div
                        className={`team_core_container_${i + 1}`}
                        key={i}
                      >
                        {year.core.slice(slice[0], slice[1]).map((data) => (
                          <CoreMember
                            key={data.id}
                            data={data}
                            loading={loading}
                            avatarClass={
                              year.isCurrent
                                ? `core_image core_image_${data.id}`
                                : undefined
                            }
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {hasTeams && (
                <div className="tp_teammemberdiv">
                  <div>
                    <h1 className="team__header">
                      {prefix}TEAM MEMBERS {yearSuffix}
                    </h1>
                  </div>
                  <TeamMember team={year.teams} />
                </div>
              )}
              {hasExec && (
                <div className="team_core">
                  <h1 className="team__header">EX-EXECUTIVE TEAM {yearSuffix}</h1>
                  <div className="team_core_container">
                    <div className="team_core_container_1">
                      {year.exec.map((data) => (
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
              )}
            </div>
            <img src={landing_circle} alt="" className="team_circle" />
          </React.Fragment>
        );
      })}
    </motion.div>
  );
}

export default TeamPage;
