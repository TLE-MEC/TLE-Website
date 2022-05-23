import './Events.css';

function EventCard(props) {
  return (
    <div className="flip-card-1">
      <div className="flip-card-1-inner">
        <div className="flip-card-1-front">
          <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" className="events-card-image"/>
        </div>
        <div className="flip-card-1-back">
          <h4>{props.description}</h4><br/>
          <p>{props.details}</p>
        </div>
        <div className='events-card-rect-1'></div>
        <div className='events-card-text-1'>{props.name}</div>
      </div>
    </div>
  )
}
export default EventCard;