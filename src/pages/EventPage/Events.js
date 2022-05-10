import '../../components/Events/Events.css';
import Logo1 from '../../assets/svg/cubo announcement 2.svg';
import Ellipse from '../../assets/svg/Ellipse 4.svg'
import Ellipse1 from '../../assets/svg/Ellipse 3.svg'
import Subtract from '../../assets/svg/Subtract.svg'
import Card from '../../components/Events/Card'
import Event from '../../data/Event';
function EventsPage() {
  return (
    <div className='events-1'>
      <div className='events-title'>EVENTS</div>
      <div className='outer'><img className="events-image-1" src={Logo1} alt="logo1" /></div>
      <img className="events-image-2" src={Ellipse} alt="ellipse" />
      <img className="events-image-3" src={Ellipse1} alt="ellipse1" />
      <img className="events-image-4" src={Subtract} alt="subtract" />
      <img className="events-image-2" src={Ellipse} alt="ellipse" />
      <div className='events-card-1'>
        {Event.map((e)=>{
          return (
          <Card name={e.name} description={e.description} details={e.details}/>
        );})}
      </div>  
    </div>
  );
}
export default EventsPage;