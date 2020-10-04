import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import RegisteredEvent from "../RegisteredEvent/RegisteredEvent";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [loggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:5000/volunteer/registeredevents", {
      method: "POST",
      body: JSON.stringify({ email: loggedInUser.email }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((allEvents) => setEvents(allEvents))
      .catch((err) => alert("No Data found"));
  }, [loggedInUser.email]);

  const deleteEvent = (id) => {
    fetch("http://localhost:5000/volunteer/event/delete", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Event deleted successfully");
          const remainningEvents = events.filter((event) => event._id !== id);
          setEvents(remainningEvents);
        } else {
          alert("Event deletion failed");
        }
      })
      .catch(() => alert("Something went wrong"));
  };

  return (
    <Container>
      <Row>
        {events.length ? (
          events.map((eventInfo) => (
            <RegisteredEvent
              key={eventInfo._id}
              eventInfo={eventInfo}
              deleteEvent={deleteEvent}
            />
          ))
        ) : (
          <h4>
            Volunteer Task list empty. <Link to="/">Register Now</Link>
          </h4>
        )}
      </Row>
    </Container>
  );
};

export default Dashboard;
