import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class NavbarTop extends Component {
  state = {};
  render() {
    return (
      <Navbar sticky="top" bg="white" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Create</Nav.Link>
            <Nav.Link href="#link">Learn</Nav.Link>
          </Nav>
          <Navbar.Brand href="#home">MoodMusic</Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarTop;
