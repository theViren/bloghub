import React from "react";
import { Badge, Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/CardFour.module.css"; // Make sure to adjust the path to your module CSS file

const cardData = [
  {
    title: "Definitive Guide to Marketing Metrics, Analytics",
    badgeText: "Entertainment",
    imageSrc:
      "https://github.com/theViren/React-Practice---Greetings-with-Props/blob/main/anime.jpeg?raw=true",
  },
  {
    title: "10+ Free Tools to Make Your Own Animated GIFs",
    badgeText: "Technology",
    imageSrc:
      "https://github.com/theViren/React-Practice---Greetings-with-Props/blob/main/anime.jpeg?raw=true",
  },
  {
    title: "Definitive Guide to Marketing Metrics, Analytics",
    badgeText: "Entertainment",
    imageSrc:
      "https://github.com/theViren/React-Practice---Greetings-with-Props/blob/main/anime.jpeg?raw=true",
  },
  {
    title: "10+ Free Tools to Make Your Own Animated GIFs",
    badgeText: "Technology",
    imageSrc:
      "https://github.com/theViren/React-Practice---Greetings-with-Props/blob/main/anime.jpeg?raw=true",
  },
];

const CardFour = () => {
  return (
    <Container fluid className="mt-3">
      <Row className="d-flex justify-content-center align-items-center">
        {cardData.map((card, index) => (
          <Col key={index} xs={12} md={6} lg={3}>
            <div className={`${styles["image-parent"]}`}>
              <img src={card.imageSrc} alt="article" />
              <Badge className={`${styles["list-badge"]}`}>
                {card.badgeText}
              </Badge>
              <h6 className={`${styles["list-title"]}`}>{card.title}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardFour;
