import React from "react";
import EventCard from "./EventCard";

const EventList = ({ events, updateSelectedEventId }) => {
  return (
    <div>
      {events.map(({ id, title, location, price }) => {
        return <EventCard
          id={id}
          key={id}
          title={title}
          location={location}
          price={price}
          updateSelectedEventId={updateSelectedEventId}
        />
      })}
    </div>
  );
}

export default EventList;