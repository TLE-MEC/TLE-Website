import '../../components/Events/Events.css';
import logo from '../../assets/svg/cubo-announcement.svg'
import EventCard from './EventCard'
import eventData from '../../data/eventData';

function Events() {
  return (
    <div className='events' id='events'>
      <div className='events__container'>
        <h1 className='section__header'>EVENTS</h1>
        <img className="events_cubo" src={logo} alt="" />
        <p className="section__text">The official announcements about upcoming events will be published here.<br/>Keep checking to know more...</p>
        
        <div className='events-card'>
          {eventData.slice(0, 3).map((eve, id) => (
            <EventCard key={id} name={eve.name} description={eve.description} details={eve.details}/>
          ))}
        </div>

        <div className='events_more'>
          <button className='events_btn'>View More</button>
        </div>
      </div>
    </div>
  );
}
export default Events;