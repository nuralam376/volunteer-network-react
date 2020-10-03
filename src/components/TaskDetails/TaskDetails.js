import React from "react";
import { Col, Image } from "react-bootstrap";
import "./TaskDetails.css";

const TaskDetails = ({ task }) => {
  const { name, image } = task;
  return (
    <Col md={3} className="mt-5 task">
      <Image src={image} className="w-100 task-img" />
      <h4 className="task-name">{name}</h4>
    </Col>
  );
};

export default TaskDetails;
