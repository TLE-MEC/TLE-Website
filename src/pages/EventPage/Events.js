import '../../components/Events/Events.css';
import Logo1 from '../../assets/svg/cubo announcement 2.svg';
import Ellipse from '../../assets/svg/Ellipse 4.svg'
import Ellipse1 from '../../assets/svg/Ellipse 3.svg'
import Subtract from '../../assets/svg/Subtract.svg'
function EventsPage() {
  return (
    <div className='events-1'>
      <img className="events-image-1" src={Logo1} alt="logo1" />
      <img className="events-image-2" src={Ellipse} alt="ellipse" />
      <img className="events-image-3" src={Ellipse1} alt="ellipse1" />
      <img className="events-image-4" src={Subtract} alt="subtract" />
      <div className='events-title'>EVENTS</div>
      <div className='events-card-1'>
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
              <div className='events-card-text-1'>Event 4</div>
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
              <div className='events-card-text-1'>Event 5</div>
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
              <div className='events-card-text-1'>Event 6</div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
export default EventsPage;