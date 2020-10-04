import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import EventDetails from "../EventDetails/EventDetails";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allevents")
      .then((res) => res.json())
      .then((allEvents) => setEvents(allEvents))
      .catch((err) => alert("No Data found"));
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
