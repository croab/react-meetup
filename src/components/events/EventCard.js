import React, { Component } from "react";

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
      <div onClick={this.handleClick}>
        <h3>{title}</h3>
        <p>{location}</p>
        <p>{price}</p>
      </div>
    );
  }
}

export default EventCard;