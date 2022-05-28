import React from 'react';
import { motion } from 'framer-motion';

import '../../components/Events/Events.css';

import Logo1 from '../../assets/svg/cubo announcement 2.svg';
import Ellipse from '../../assets/svg/ellipse1.svg'
import Ellipse1 from '../../assets/svg/Ellipse 3.svg'
import Subtract from '../../assets/svg/landing_circle.svg'
import EventCard from '../../components/Events/EventCard'
import eventData from '../../data/eventData';


function EventPage() {
  return (
    <motion.div 
      className='events-1'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div className='events-title'>EVENTS</div>
      <div className='outer'><img className="events-image-1" src={Logo1} alt="logo1" /></div>
      <img className="events-image-2" src={Ellipse} alt="ellipse" />
      <img className="events-image-3" src={Ellipse1} alt="ellipse1" />
      <img className="events-image-4" src={Subtract} alt="subtract" />
      <img className="events-image-2" src={Ellipse} alt="ellipse" />
      <div className='events-card-1'>
        {eventData.map((e)=>{
          return (
            <EventCard name={e.name} description={e.description} details={e.details}/>
        )})}
      </div>  
    </motion.div>
  );
}
export default EventPage;