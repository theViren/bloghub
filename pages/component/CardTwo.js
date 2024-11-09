import React from "react";
import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import styles from "@/styles/CardTwo.module.css";
const cardData = [
  {
    imageSrc:
      "https://github.com/theViren/React-Practice---Greetings-with-Props/blob/main/anime.jpeg?raw=true",
    badgeText: "News",
    title: "64 Creative Marketing Ideas to Boost Your Business",
  },
  {
    imageSrc:
      "https://github.com/theViren/React-Practice---Greetings-with-Props/blob/main/anime.jpeg?raw=true",
    badgeText: "News",
    title: "64 Creative Marketing Ideas to Boost Your Business",
  },
];
const CardTwo = ({ colProp }) => {
  return (
    <Container fluid className="mt-1">
      <Row className="d-flex justify-content-center align-items-center">
        {cardData.map((item, index) => (
          <Col key={index} xs={12} sm={12} md={6} lg={colProp}>
            <ul className="list-group">
              <li
                className={`list-group-item d-flex justify-content-between align-items-center ${styles["card-two"]}`}
              >
                <div className={styles["image-parent"]}>
                  <Image src={item.imageSrc} fluid alt="quixote" />
                  <Badge className={styles["image-badge"]}>
                    {item.badgeText}
                  </Badge>
                </div>
                <span className={styles["card-two-title"]}>{item.title}</span>
              </li>
            </ul>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default CardTwo;
