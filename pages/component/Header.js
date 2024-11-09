import { React, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

import {
  faUniversity,
  faBook,
  faChalkboardTeacher,
  faFileAlt,
  faInfoCircle,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Header.module.css";
import MobileSidebar from "./Sidebar"; // Import the MobileSidebar component
import Logo from "./Logo";

const CustomNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Initialize state

  return (
    <Navbar className={`${styles["custom-navbar"]}`} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <FontAwesomeIcon
            icon={faUniversity}
            className={`${styles["university-icon"]}`}
          />
          <Logo />
        </Navbar.Brand>
        <MobileSidebar setIsSidebarOpen={setIsSidebarOpen} />{" "}
        {/* Pass setIsSidebarOpen to MobileSidebar */}
        <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
          <Nav className={`ml-auto`}>
            <Nav.Link href="#home" className={`${styles["nav-link"]}`}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
            <Nav.Link href="#courses" className={`${styles["nav-link"]}`}>
              <FontAwesomeIcon icon={faBook} /> Courses
            </Nav.Link>
            <Nav.Link href="#tutorials" className={`${styles["nav-link"]}`}>
              <FontAwesomeIcon icon={faChalkboardTeacher} /> Tutorials
            </Nav.Link>
            <Nav.Link href="#resources" className={`${styles["nav-link"]}`}>
              <FontAwesomeIcon icon={faFileAlt} /> Resources
            </Nav.Link>
            <Nav.Link href="#about" className={`${styles["nav-link"]}`}>
              <FontAwesomeIcon icon={faInfoCircle} /> About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Stack direction="horizontal" gap={3} className="d-none d-lg-flex">
          <Form.Control className="me-auto" placeholder="Search" />
          <Button className={`${styles["sidebar-search-btn"]}`}>
            Search
          </Button>{" "}
        </Stack>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
