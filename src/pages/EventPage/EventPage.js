import React from 'react';
import { motion } from 'framer-motion';

import './EventPage.css'

import EventCard from '../../components/Events/EventCard'
import eventData from '../../data/eventData';

import eventsCubo from '../../assets/svg/eventsCubo.svg';
import eventsPage_ellipse from '../../assets/svg/ellipse1.svg'
import eventsPage_circle from '../../assets/svg/landing_circle.svg'



function EventPage() {
  return (
    <motion.div 
      className='eventsPage'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <img src={eventsCubo} alt="" className="eventsPageCubo" />
      <img src={eventsPage_circle} alt="" className="eventsPage_circle" />
      <img src={eventsPage_ellipse} alt="" className="eventsPage_ellipse" />
      <div className='eventsPage__container'>
        <h1 className='section__header'>EVENTS</h1>
        <div className='events-card'>
          {eventData.slice(0).reverse().map((eve) => (
            <EventCard 
              id={eve.id} 
              key={eve.id} 
              name={eve.name} 
              desc={eve.desc} 
              image={eve.image}
              date={eve.date}
              youtube={eve.youtube}
              github={eve.github}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
export default EventPage;