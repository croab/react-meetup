import { useRef } from "react";

import Card from "./../ui/Card";
import classes from "./NewEventForm.module.css";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const locationInputRef = useRef();
  const priceInputRef = useRef();


  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;

    const eventData = {
      title: enteredTitle,
      description: enteredDescription,
      location: enteredLocation,
      price: enteredPrice
    };

    props.onAddEvent(eventData);
  };

  return (
    <Card>
      <form className={classes.form} action="post" onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Event Title</label>
          <input type="text" required id="title" ref={titleInputRef}/>
          <label htmlFor="description">Event Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
          <label htmlFor="location">Event Location</label>
          <input type="text" required id="location" ref={locationInputRef}/>
          <label htmlFor="price">Event Price</label>
          <input type="number" required id="price" ref={priceInputRef}/>
          <div className={classes.action}>
            <button>Add Event</button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;