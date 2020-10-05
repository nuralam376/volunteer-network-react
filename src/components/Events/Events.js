import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import EventDetails from "../EventDetails/EventDetails";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://volunteer-network1.herokuapp.com/allevents")
      .then((res) => res.json())
      .then((allEvents) => setEvents(allEvents))
      .catch(() => {
        alert("No Data found");
        window.location.reload(); // Reload the page for restarting heroku app from idle/sleep mode
      });
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {events.map((event) => (
          <EventDetails key={event._id} event={event} />
        ))}
      </Row>
    </Container>
  );
};

export default Events;
