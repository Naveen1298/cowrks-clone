import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";
import NavBarCss from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={NavBarCss.size}>
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <Image
              className={NavBarCss.logoNavBar}
              src={logo}
              alt="Cowrks"
              fluid
            />
          </Navbar.Brand>
          <Nav>
            <NavDropdown title="Locations" id="navbarScrollingDropdown">
              <NavDropdown.Item
                // href="#action3"
                onClick={() => {
                  alert("Coming Soon to Bangalore...");
                }}
              >
                Bengalore
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  alert("Coming Soon to Chennai...");
                }}
              >
                Chennai
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item
                onClick={() => {
                  alert("Coming Soon to Hyderabad...");
                }}
              >
                Hyderabad
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Solutions" id="navbarScrollingDropdown">
              <NavDropdown.Item href="">Flexible Offices</NavDropdown.Item>
              <NavDropdown.Item href="">Managed Offices</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="">Instant Solutions</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Offers</Nav.Link>
            <Nav.Link href="#action1">Brand Alliance</Nav.Link>
            <Nav.Link href="#action1">About Us</Nav.Link>
            <Nav.Link
              // className={NavBarCss.constactUs}
              style={{ color: "white", backgroundColor: "#003462" }}
              onClick={() => {
                alert("Get Ready to meet us...");
              }}
            >
              Contact us
            </Nav.Link>

            {/* <Nav.Link href="#" disabled>
            Link
          </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
