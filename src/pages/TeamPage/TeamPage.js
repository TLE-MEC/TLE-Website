import React, { useState } from "react";
import semicircle1 from "../../assets/png/semicircle1.png";
import semicircle2 from "../../assets/png/semicircle2.png";
import pic1 from "../../assets/svg/pic1.svg";
import pic2 from "../../assets/png/pic2.png";
import viewmore from "../../assets/svg/viewmore.svg";
import blankhexagon from "../../assets/png/blankhexagon.png";
import chairpersonimg from "../../assets/svg/chairpersonimg.svg";

import "./TeamPage.css";
function TeamPage() {
  //const [visible, setvisible] = useState(false);

  return (
    <div id="TeamMaindiv" fluid>
      <img src={semicircle1} id="semicircle1"></img>
      <h1 id="Team-heading">OUR TEAM</h1>

      <div className="Team-imgdiv-Parentdiv" fluid>
        <div className="Team-imgdiv">
          <img className="hexagon" src={blankhexagon} />
          <span className="Team-chairpersonParent">
            <img src={chairpersonimg} className="hexagon"></img>
            <span className="Teampage-overlay hexagon">Chairperson</span>
          </span>
        </div>
        <div className="Team-imgdiv">
          <img className="hexagon" src={pic1} />
          <img className="hexagon" src={pic2} />
          <img className="hexagon" src={viewmore} />
        </div>
      </div>
      <img src={semicircle2} id="semicircle2"></img>
    </div>
  );
}

export default TeamPage;
