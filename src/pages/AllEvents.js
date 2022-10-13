import React, { Component } from 'react';
import EventList from "./../components/events/EventList";

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
      events: DATA
    };
  }
  render() {
    return (
      <div>
        <h1>Events</h1>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default AllEventsPage;