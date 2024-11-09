import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Footer.module.css";
import WavyFooter from "./WavyFooter";
import Logo from "./Logo";

const FooterComponent = () => {
  return (
    <div className={styles["footer-wrapper"]}>
      <WavyFooter />
      <footer className={styles["footer-body"]} style={{ overflow: "hidden" }}>
        <Container>
          <Row>
            <Col md={12} className="text-center m-4">
              <Logo />
            </Col>
            <Col md={12} className="text-center mb-md-0">
              <ul className={`list-unstyled mb-0 ${styles["footer-links"]}`}>
                <li>
                  <a href="#" className={`${styles["footer-link"]}`}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className={`${styles["footer-link"]}`}>
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a href="#" className={`${styles["footer-link"]}`}>
                    DMCA
                  </a>
                </li>
                <li>
                  <a href="#" className={`${styles["footer-link"]}`}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className={`${styles["footer-link"]}`}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row>
            <Col md={12} className={`text-center ${styles["footer-credit"]}`}>
              <p className="mb-0">
                &copy; 2023 BlogHub. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default FooterComponent;
