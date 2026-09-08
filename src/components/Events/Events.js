import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

import logo from "../../assets/svg/cubo-announcement.svg";
import EventCard from "./EventCard";

import "./Events.css";
import { getEvents } from "../../utils/events";

function Events() {
  AOS.init({
    duration: 800,
  });
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchEvents() {
      try {
        const eventList = await getEvents();
        setEvents(eventList);
      } catch (error) {
        console.error("Failed to load events:", error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);
  if (loading) return <div className="loading">Loading...</div>;
  const upcomingCount = events.filter(
    (event) => event.isUpcoming === true
  ).length;
  return (
    <div className="events" id="events">
      <div className="events__container">
        <h1 className="section__header">EVENTS</h1>
        <img className="events_cubo" src={logo} alt="" />
        <p className="section__text">
          The official announcements about our upcoming events will be published
          here.
        </p>

        <h3 className="events-subheading">Upcoming Events</h3>
        {upcomingCount === 0 ? (
          <p className="events-subheading-text">
            There are no upcoming events right now, check back later!
          </p>
        ) : (
          <div className="events-card">
            {events?.map((eve) =>
              eve.isUpcoming === true ? (
                <EventCard
                  id={eve.id}
                  link={eve.link}
                  key={eve.id}
                  name={eve.name}
                  desc={eve.desc}
                  image={eve.image}
                  date={eve.date}
                  youtube={eve.youtube}
                  github={eve.github}
                  participants={eve.participants}
                  dialog_img={eve.dialog_img}
                  leaderboard={eve.leaderboard}
                />
              ) : (
                ""
              )
            )}
          </div>
        )}

        <h3 className="events-subheading">Past Events</h3>
        <div className="events-card">
          {events
            .slice(0)
            .reverse()
            .slice(0, 5)
            .map((eve) =>
              eve.isUpcoming === false ? (
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
                  leaderboard={eve.leaderboard}
                />
              ) : null
            )}
        </div>

        <div className="events_more">
          <Link to="events">
            <button className="events_btn">View All</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Events;
