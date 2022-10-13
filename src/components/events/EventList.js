import React from "react";
import EventCard from "./EventCard";

const EventList = ({ events }) => {
  return (
    <div>
      {events.map(({ id, title, description, location, price }) => {
        return <EventCard
          id={id}
          key={id}
          title={title}
          description={description}
          location={location}
          price={price}
        />
      })}
    </div>
  );
}

export default EventList;