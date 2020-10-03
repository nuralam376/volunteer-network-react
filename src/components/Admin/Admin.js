import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Switch from "react-bootstrap/esm/Switch";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Event from "../Event/Event";
import VolunteerLists from "../VolunteerLists/VolunteerLists";
import "./Admin.css";

const Admin = () => {
  return (
    <div id="admin">
      <Container>
        <Router>
          <Row>
            <Col md={3}>
              <ul>
                <li>
                  <Link to="/admin/volunterlist">
                    <Image src="/resources/logos/users-alt1.png" />
                    Volunteer register list
                  </Link>
                </li>
                <li>
                  <Link to="/admin/addevent">
                    <Image src="/resources/logos/plus1.png" />
                    Add Event
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={9}>
              <Switch>
                <Route exact path="/admin">
                  <VolunteerLists />
                </Route>
                <Route exact path="/admin/volunterlist">
                  <VolunteerLists />
                </Route>
                <Route exaxct path="/admin/addevent">
                  <Event />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Router>
      </Container>
    </div>
  );
};

export default Admin;
