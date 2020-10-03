import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";

const RegisteredTask = ({ task }) => {
  const { name, image } = task;
  return (
    <Col md={6} className="mb-5">
      <Row>
        <Col md={4} className="m-2 p-2">
          <Image src="/resources/images/extraVolunteer.png" className="w-100" />
        </Col>
        <Col md={6} className="m-2 p-2">
          <h3>Task</h3>
          <h5>{new Date().toDateString()}</h5>
          <Button variant="danger">Cancel</Button>
        </Col>
      </Row>
    </Col>
  );
};

export default RegisteredTask;
