import React from 'react';
import AOS from 'aos'
import { Link } from 'react-router-dom';

import logo from '../../assets/svg/cubo-announcement.svg'
import EventCard from './EventCard'
import eventData from '../../data/eventData';

import './Events.css';


function Events() {

  AOS.init({
    duration: 800,
  })


  return (
    <div className='events' id='events'>
      <div className='events__container'>
        <h1 className='section__header'>EVENTS</h1>
        <img className="events_cubo" src={logo} alt="" />
        <p className="section__text">The official announcements about our upcoming events will be published here.</p>

        <h3 className='events-subheading'>Upcoming Events</h3>
        <p className='events-subheading-text'>There are no upcoming events right now, check back later!</p>
        <h3 className='events-subheading'>Past Events</h3>
        <div className='events-card'>
          {eventData.slice(0).reverse().slice(0, 3).map((eve) => (
            <EventCard
              id={eve.id}
              key={eve.id}
              name={eve.name}
              desc={eve.desc}
              image={eve.image}
              date={eve.date}
              youtube={eve.youtube}
              github={eve.github}
              participants={eve.participants}
              dialog_img={eve.dialog_img}
              leaderboard={eve.leaderboard}
            />
          ))}
        </div>

        <div className='events_more'>
          <Link to='events'>
            <button className='events_btn'>
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Events;