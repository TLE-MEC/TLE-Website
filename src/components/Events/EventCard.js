import React from 'react';
// import { AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { GoTelescope } from "react-icons/go"
import AOS from 'aos'

import eventData from '../../data/eventData';
import './Events.css';

function EventCard({ id, name, desc, image, date, youtube, github }) {

  AOS.init()

  const len = eventData.length

  return (
    <div key={id} className="eventCard" data-aos="fade-up" data-aos-duration={`${400*(len+1-id)}`}>
      <div className="eventCard_image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <div className="time">{date}</div>
          <div className="name">{name}</div>
        </div>
        <div className="para">{desc}</div>
      </div>
      <div className="eventCard_activity">
        <button>
          Explore
          <GoTelescope />
        </button>
      </div>
    </div>
  )
}
export default EventCard;