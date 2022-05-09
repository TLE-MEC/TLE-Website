import './Events.css';
import Logo from '../../assets/svg/cubo-announcement.svg'
function Events() {
  return (
    < div className='events'>
      <div className='events-title'>EVENTS</div>
      <div className="events-logo"><img className="events-image" src={Logo} alt="logo" /></div>
      <div className="events-text">The official announcements about upcoming events will be published here.<br/> Keep checking to know more...</div>
      <div className='events-card'>
          <div class="flip-card-1">
            <div class="flip-card-1-inner">
              <div class="flip-card-1-front">
              </div>
              <div class="flip-card-1-back">
                <h4>Event Description</h4><br/>
                <p>more details....</p>
              </div>
              <div className='events-card-rect-1'></div>
              <div className='events-card-text-1'>Event 1</div>
            </div>
          </div>
          <div class="flip-card-1">
            <div class="flip-card-1-inner">
              <div class="flip-card-1-front">
              </div>
              <div class="flip-card-1-back">
                <h4>Event Description</h4><br/>
                <p>more details....</p>
              </div>
              <div className='events-card-rect-1'></div>
              <div className='events-card-text-1'>Event 2</div>
            </div>
          </div>
          <div class="flip-card-1">
            <div class="flip-card-1-inner">
              <div class="flip-card-1-front">
              </div>
              <div class="flip-card-1-back">
                <h4>Event Description</h4><br/>
                <p>more details....</p>
              </div>
              <div className='events-card-rect-1'></div>
              <div className='events-card-text-1'>Event 3</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Events;