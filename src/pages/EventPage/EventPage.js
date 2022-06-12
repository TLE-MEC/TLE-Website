import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

import './EventPage.css'

import EventCard from '../../components/Events/EventCard'
import eventData from '../../data/eventData';

import eventsCubo from '../../assets/svg/eventsCubo.svg';
import eventsPage_ellipse from '../../assets/svg/ellipse1.svg'
import eventsPage_circle from '../../assets/svg/landing_circle.svg'



function EventPage() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/')
  }


  return (
    <motion.div 
      className='eventsPage'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div className='eventsPage__container'>
      <FiArrowLeft onClick={goBack} className="goBack"/>
      <div className='teamPage__header_div'>
        <div className='tp__header_left'>
          <h1>Our <span className="primary">Events</span></h1>
          <HashLink to="#events" smooth>
            <button>View</button>
          </HashLink>
          
        </div>
        <div className='tp__header_right'>
          <p>
            Contests and sessions to learn, practice, teach and grow only scratch the surface of what we do. It is our dedication to give and take constant mentorship that makes us a source of support for all your CP endeavours. Mutual support topped with friendly competition, afterall, is one of the most efficient motivators of growth and we're all in this together!
          </p>
        </div>
      </div>
        <h1 className='section__header' id='events'>EVENTS</h1>
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
              participants={eve.participants}
              dialog_img={eve.dialog_img}
            />
          ))}
        </div>
        <img src={eventsCubo} alt="" className="eventsPageCubo" />
        <img src={eventsPage_circle} alt="" className="eventsPage_circle" />
        <img src={eventsPage_ellipse} alt="" className="eventsPage_ellipse" />
      </div>
    </motion.div>
  );
}
export default EventPage;