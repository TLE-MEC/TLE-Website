import React from "react";

import coreData from "../../data/coreData";
import execData from "../../data/execData";

import "./TeamPage.css";


function TeamPage() {

  return (
    <div className="teamPage">
      <div className="teamPage__container">
        <div className="team_core">
          <h1 className="team__header">CORE TEAM</h1>
          <div className="team_core_container">
            <div className="team_core_container_1">
              {
                coreData.slice(0, 3).map((data) => (
                  <div className="singleCore" key={data.id}>
                      <img src={data.image} alt="" />
                      <h3>{data.name}</h3>
                      <p>{data.title}</p>
                  </div>
                ))
              }
            </div>
            <div className="team_core_container_2">

            </div>
          </div>
        </div>
        <div className="team_exec">
          <h1 className="team__header">EXECUTION TEAM</h1>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
