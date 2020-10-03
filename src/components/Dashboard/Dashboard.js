import React from "react";
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import RegisteredTask from "../RegisteredTask/RegisteredTask";

const Dashboard = () => {
  const [, , registeredTasks] = useContext(UserContext);

  return (
    <Container>
      <Row>
        {registeredTasks.length ? (
          registeredTasks.map((task) => (
            <RegisteredTask key={task.id} task={task} />
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
