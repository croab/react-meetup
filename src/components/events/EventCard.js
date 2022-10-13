import React, { Component } from "react";

class EventCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, title, description, location, price } = this.props;
    if (!id) {
      return null;
    }
    return (
      <div>
        <h3>{title}</h3>
        <p>{location}</p>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    );
  }
}

export default EventCard;