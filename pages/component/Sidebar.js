import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "@/styles/Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowRight,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons"; // Import the necessary Font Awesome icons
import Link from "next/link";
import Logo from "./Logo";

function MobileSidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        className={`d-lg-none ${styles["navbar"]}`}
      >
        <Navbar.Toggle aria-controls="sidebar" onClick={toggleSidebar} />
      </Navbar>
      <Offcanvas
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        placement="start"
        className={`d-lg-none ${styles["offcanvas-body"]}`}
      >
        <Offcanvas.Header closeButton>
          <Logo />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form className="mt-1">
            <Form.Control
              type="search"
              placeholder="Search"
              className="mb-2"
              aria-label="Search"
            />
            <Button className={`${styles["sidebar-search-btn"]}`}>
              Search
            </Button>
          </Form>
          <Nav className="flex-column">
            <Stack gap={1} className={`${styles["sidebar-btn"]} mt-2`}>
              <Link href="#" className="p-2">
                Education
              </Link>
              <Link href="#" className="p-2">
                Movies
              </Link>
              <Link href="#" className="p-2">
                Apk
              </Link>
              <Link href="#" className="p-2">
                Web Series
              </Link>
            </Stack>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MobileSidebar;
