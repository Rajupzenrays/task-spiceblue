import React from 'react';
import { Link } from "react-router-dom";
import './Heading.css'
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";

export const Heading = () => {
  return (
    <Navbar className="AddTaskMain">
      <Container>
        <NavbarBrand href="/">TASK</NavbarBrand>
        <Nav>
          <NavItem className=" plus">
            <Link  to="/add">+</Link>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>
  )
}
