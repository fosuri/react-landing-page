import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="xl"
          style={{
            backgroundColor: "#E0E0E0",
            boxShadow: "0px 8px 16px rgba(29, 29, 29,0.5)",
            padding: "5px",
            minHeight: "70px",
            boxSizing: "border-box",
          }}
        >
          <Container
            className="arimo"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <Navbar.Brand href="/">
              <img
                src={`${process.env.PUBLIC_URL}/perspectiveLogo.png`}
                alt="Logo"
                width="60"
                height="60"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Nav style={{ marginRight: "auto" }}>
              <Nav.Link className="fos-header-text" style={{ padding: "0px" }}>
                PERSPECTIVE.TOURS
              </Nav.Link>
            </Nav>

            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{
                outline: "none",
                border: "none",
                boxShadow: "none",
              }}
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto text-end">
                <Nav.Link className="fos-header-text">MIKS MEIE?</Nav.Link>
                <Nav.Link className="fos-header-text">PILETID</Nav.Link>
                <Nav.Link className="fos-header-text">ARVUSTUSED</Nav.Link>
                <Nav.Link className="fos-header-text">KES ME OLEME?</Nav.Link>
                <Nav.Link className="fos-header-text">KONTAKTID</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
