import React from 'react';
import { AiFillYoutube, AiFillGithub } from "react-icons/ai";
import AOS from 'aos'

import './Events.css';

function EventCard({ id, name, desc, image, date, youtube, github }) {

  console.log(id)
  
  AOS.init()

  return (
    <div key={id} className="eventCard" data-aos="fade-up" data-aos-duration={`${400*id}`}>
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
      <div className="activity">
        <div className="logo">
          {youtube && (
            <a className="link" href={youtube} target="_blank" rel='noreferrer'>
              <AiFillYoutube className='eventCard__icon'/>
            </a>
          )}
        </div>
        <div className="logo">
          {github && (
            <a className="link" href={github} target="_blank" rel='noreferrer'>
              <AiFillGithub className='eventCard__icon'/>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
export default EventCard;