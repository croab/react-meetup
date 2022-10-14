import React, { Component } from "react";

import Card from "./../ui/Card";

class EventShow extends Component {
  render() {
    console.log("In the event show");
    if (!this.props.event) {
      return null;
    }
    const { title, description, location, price } = this.props.event;
    return (
      <Card>
        <div>
          <h3>{title}</h3>
          <p>{location}</p>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </Card>
    );
  }
}

export default EventShow;