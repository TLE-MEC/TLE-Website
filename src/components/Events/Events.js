import '../../components/Events/Events.css';
import Logo from '../../assets/svg/cubo-announcement.svg'
import Card from './Card'
import Event from '../../data/Event';
function Events() {
  return (
    < div className='events'>
      <div className='events-title'>EVENTS</div>
      <div className="events-logo"><img className="events-image" src={Logo} alt="logo" /></div>
      <div className="events-text">The official announcements about upcoming events will be published here.<br/>Keep checking to know more...</div>
      <div className='events-card'>
        <Card name={Event[0].name} description={Event[0].description} details={Event[0].details}/>
        <Card name={Event[1].name} description={Event[1].description} details={Event[1].details}/>
        <Card name={Event[2].name} description={Event[2].description} details={Event[2].details}/>
      </div>
    </div>
  );
}
export default Events;