import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";

const RegisteredEvent = ({ event, date }) => {
  const { _id, name, image } = event;
  return (
    <Col md={6} className="mb-5">
      <Row>
        <Col md={4} className="m-2 p-2">
          <Image src={image} className="w-100" />
        </Col>
        <Col md={6} className="m-2 p-2">
          <h3>{name}</h3>
          <h5>{new Date(date).toDateString()}</h5>
          <Button variant="danger">Cancel</Button>
        </Col>
      </Row>
    </Col>
  );
};

export default RegisteredEvent;
