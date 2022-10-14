import NewMeetupForm from "./../components/events/NewEventForm";

const NewEventPage = () => {
  const handleAddEvent = (eventData) => {
    fetch(
      'url_where_request_sent/events',
      {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
  return (
    <section>
      <h1>New Event Page</h1>
      <NewMeetupForm onAddEvent={handleAddEvent}/>
    </section>
  );
}

export default NewEventPage;