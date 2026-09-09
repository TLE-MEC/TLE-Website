import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./EventPage.css";

import EventCard from "../../components/Events/EventCard";

import eventsCubo from "../../assets/svg/eventsCubo.svg";
import eventsPage_ellipse from "../../assets/svg/ellipse1.svg";
import eventsPage_circle from "../../assets/svg/landing_circle.svg";
import { getEvents, eventSlug } from "../../utils/events";
import { Loader } from "../../components";

function eventCardProps(eve, defaultOpen = false) {
  return {
    id: eve.id ?? eve._id,
    name: eve.name,
    desc: eve.desc,
    image: eve.image,
    date: eve.date,
    youtube: eve.youtube,
    github: eve.github,
    link: eve.link,
    slug: eve.slug,
    reportUrl: eve.reportUrl,
    reportFileUrl: eve.reportFileUrl,
    participants: eve.participants,
    dialog_img: eve.dialog_img,
    leaderboard: eve.leaderboard,
    defaultOpen,
  };
}

function EventPage() {
  const navigate = useNavigate();
  const { eventSlug: slugParam } = useParams();

  const goBack = () => {
    navigate("/");
  };

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
  if (loading) return <Loader />;

  const activeSlug = slugParam ? decodeURIComponent(slugParam) : null;
  const activeEvent = activeSlug
    ? events.find((e) => eventSlug(e) === activeSlug)
    : null;
  const visibleEvents = activeEvent ? [activeEvent] : events.slice(0).reverse();

  return (
    <motion.div
      className="eventsPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div className="eventsPage__container">
        <FiArrowLeft onClick={goBack} className="goBack" />
        <div className="teamPage__header_div">
          <div className="tp__header_left">
            <h1>
              Our <span className="primary">Events</span>
            </h1>
            <HashLink to="#events" smooth>
              <button>View</button>
            </HashLink>
          </div>
          <div className="tp__header_right">
            <p>
              Contests and sessions to learn, practice, teach and grow only
              scratch the surface of what we do. It is our dedication to give
              and take constant mentorship that makes us a source of support for
              all your CP endeavours. Mutual support topped with friendly
              competition, afterall, is one of the most efficient motivators of
              growth and we're all in this together!
            </p>
          </div>
        </div>
        {activeSlug && !activeEvent ? (
          <div className="events-card">
            <p className="events-subheading-text">
              Couldn&apos;t find that event.{" "}
              <Link to="/events">View all events</Link>
            </p>
          </div>
        ) : (
          <>
            {activeEvent && (
              <p className="events-subheading-text">
                <Link to="/events">← Back to all events</Link>
              </p>
            )}
            <h1 className="section__header" id="events">
              {activeEvent ? activeEvent.name.toUpperCase() : "EVENTS"}
            </h1>
            <div className="events-card">
              {visibleEvents.map((eve) => (
                <EventCard
                  key={eve._id || eve.id}
                  {...eventCardProps(
                    eve,
                    !!activeEvent && eventSlug(eve) === activeSlug
                  )}
                />
              ))}
            </div>
          </>
        )}
        <img src={eventsCubo} alt="" className="eventsPageCubo" />
        <img src={eventsPage_circle} alt="" className="eventsPage_circle" />
        <img src={eventsPage_ellipse} alt="" className="eventsPage_ellipse" />
      </div>
    </motion.div>
  );
}
export default EventPage;
