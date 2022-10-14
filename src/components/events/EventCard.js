import React, { Component } from "react";

import Card from "./../ui/Card";

class EventCard extends Component {
  handleClick = () => {
    // console.log("In the handleClick function");
    // console.log(this.props);
    this.props.updateSelectedEventId(this.props.id);
  }

  render() {
    const { id, title, location, price } = this.props;
    if (!id) {
      return null;
    }
    return (
      <Card>
        <div onClick={this.handleClick}>
          <h3>{title}</h3>
          <p>{location}</p>
          <p>{price}</p>
        </div>
      </Card>
    );
  }
}

export default EventCard;