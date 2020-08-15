import React from "react";
//import { Link } from "react-router-dom";

import { Navbar, Nav} from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Exercise Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Exercises</Nav.Link>
          <Nav.Link href="/create">Create Exercise Log</Nav.Link>
          <Nav.Link href="/user">Create User</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
