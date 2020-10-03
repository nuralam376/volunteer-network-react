import React from "react";
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div id="header" className="mb-5">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/" className="w-25">
            <Image src="/resources/logos/Group_1329.png" className="w-100" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/" className="nav-link">
                Donation
              </Link>
              <Link to="/" className="nav-link">
                Events
              </Link>
              <Link to="/" className="nav-link">
                Blog
              </Link>
              <Link to="/login" className="nav-link">
                <Button variant="primary">Register</Button>
              </Link>
              <Link to="/login" className="nav-link">
                <Button variant="secondary">Admin</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
