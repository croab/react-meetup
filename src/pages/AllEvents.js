import React, { Component } from 'react';
import EventList from "./../components/events/EventList";
import EventShow from "./../components/events/EventShow";

import classes from "./AllEvents.module.css";


const DATA = [
  {
    id: "1",
    title: "Title 1",
    description: "Description 1",
    location: "Bristol",
    price: "100"
  },
  {
    id: "2",
    title: "Title 2",
    description: "Description 2",
    location: "London",
    price: "20"
  },
  {
    id: "3",
    title: "Title 3",
    description: "Description 3",
    location: "York",
    price: "80"
  },
  {
    id: "4",
    title: "Title 4",
    description: "Description 4",
    location: "Manchester",
    price: "40"
  },
];

class AllEventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvent: null,
      events: DATA
    };
  }

  updateSelectedEventId = (eventId) => {
    const event = DATA.find((eventItem) => eventItem.id === eventId);
    console.log(event);
    this.setState({
      selectedEvent: event
    });
  }

  render() {
    return (
      <section>
        <h1>All Events</h1>
        <div className={classes.eventsContainer}>
          <div className={classes.leftScreen}>
            <EventList
              events={this.state.events}
              updateSelectedEventId={this.updateSelectedEventId}
            />
          </div>
          <div className={classes.rightScreen}>
            <EventShow event={this.state.selectedEvent}/>
          </div>
        </div>
      </section>
    );
  }
}

export default AllEventsPage;