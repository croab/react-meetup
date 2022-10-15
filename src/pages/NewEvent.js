import { useNavigate } from "react-router-dom";

import NewMeetupForm from "./../components/events/NewEventForm";

const NewEventPage = () => {
  const navigate = useNavigate();
  const handleAddEvent = (eventData) => {
    fetch(
      'https://react-meetup-9db72-default-rtdb.europe-west1.firebasedatabase.app/events.json',
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