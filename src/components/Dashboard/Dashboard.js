import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { UserContext } from "../../App";
import RegisteredTask from "../RegisteredTask/RegisteredTask";

const Dashboard = () => {
  const [, , registeredTasks] = useContext(UserContext);

  return (
    <Container>
      <Row>
        {registeredTasks.map((task) => (
          <RegisteredTask key={task.id} task={task} />
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
