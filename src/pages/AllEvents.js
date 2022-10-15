import React, { Component, useState, useEffect } from 'react';
import EventList from "./../components/events/EventList";
import EventShow from "./../components/events/EventShow";

import classes from "./AllEvents.module.css";

function AllEventsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedEvents, setLoadedEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState({});

  useEffect(() => {
    fetch(process.env.REACT_APP_FIREBASE)
      .then(response => response.json())
      .then((data) => {
        const events = [];

        for (const key in data) {
          const event = {
            id: key,
            ...data[key]
          };
          events.push(event);
        }

        setLoadedEvents(events);
        setIsLoading(false);
      });
    }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  const updateSelectedEventId = (eventId) => {
    const event = loadedEvents.find((eventItem) => eventItem.id === eventId);
    console.log(event);
    setSelectedEvent(event);
  }

  return (
    <section>
      <h1>All Events</h1>
      <div className={classes.eventsContainer}>
        <div className={classes.leftScreen}>
          <EventList
            events={loadedEvents}
            updateSelectedEventId={updateSelectedEventId}
          />
        </div>
        <div className={classes.rightScreen}>
          <EventShow event={selectedEvent}/>
        </div>
      </div>
    </section>
  );
}

export default AllEventsPage;