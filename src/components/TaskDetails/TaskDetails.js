import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TaskDetails.css";

const TaskDetails = ({ task }) => {
  const { name, image } = task;
  return (
    <Col md={3} className="mt-5 task">
      <Link to={`/volunteerregister/${name}`}>
        <Image src={image} className="w-100 task-img" />
        <h4 className="task-name">{name}</h4>
      </Link>
    </Col>
  );
};

export default TaskDetails;
