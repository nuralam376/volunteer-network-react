import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Switch from "react-bootstrap/esm/Switch";
import { Link, Route } from "react-router-dom";
import VolunteerLists from "../VolunteerLists/VolunteerLists";

const Admin = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={3}>
            <Link to="/admin/list">List</Link>
            <Link to="/admin/event">Event</Link>
          </Col>
          <Col md={9}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Admin;
