import { useNavigate } from "react-router-dom";

import NewMeetupForm from "./../components/events/NewEventForm";

const NewEventPage = () => {
  const navigate = useNavigate();
  const handleAddEvent = (eventData) => {
    fetch(
      process.env.REACT_APP_FIREBASE,
      {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      navigate('/events', { replace: true });
    });
  }
  return (
    <section>
      <h1>New Event Page</h1>
      <NewMeetupForm onAddEvent={handleAddEvent}/>
    </section>
  );
}

export default NewEventPage;