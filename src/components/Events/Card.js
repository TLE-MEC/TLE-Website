import './Events.css';
function Card(props) {
  return (<div class="flip-card-1">
            <div class="flip-card-1-inner">
              <div class="flip-card-1-front">
              </div>
              <div class="flip-card-1-back">
                <h4>{props.description}</h4><br/>
                <p>{props.details}</p>
              </div>
              <div className='events-card-rect-1'></div>
              <div className='events-card-text-1'>{props.name}</div>
            </div>
          </div>)};
export default Card;