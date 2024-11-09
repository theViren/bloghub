import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "@/styles/HomeTitle.module.css";

function Ribbon({ text }) {
  return (
    <Row className="mt-3">
      <Col>
        <div className={`${styles["ribbon"]}`}>
          <div className={`${styles["ribbon-container"]}`}>
            <strong className={`${styles["ribbon-content"]}`}>
              Technology
            </strong>
          </div>
        </div>
      </Col>
      <Col>
        <div className={`${styles["ribbon1"]}`}>
          <div className={`${styles["ribbon-container1"]}`}>
            <strong className={`${styles["ribbon-content"]}`}>
              More Posts
            </strong>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Ribbon;
