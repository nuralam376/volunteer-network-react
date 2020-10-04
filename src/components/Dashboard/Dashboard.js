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
  }, []);

  return (
    <Container>
      <Row>
        {events.length ? (
          events.map((eventInfo) => (
            <RegisteredEvent
              key={eventInfo._id}
              date={eventInfo.date}
              event={eventInfo.event}
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
