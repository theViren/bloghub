import React from "react";
import { Badge, Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import styles from "@/styles/CardThree.module.css";

const cardData = [
  {
    title: "Definitive Guide to Marketing Metrics, Analytics",
    badgeText: "Entertainment",
    imageSrc:
      "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/don_quixote.jpg",
  },
  {
    title: "10+ Free Tools to Make Your Own Animated GIFs",
    badgeText: "Entertainment",
    imageSrc:
      "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/don_quixote.jpg",
  },
  {
    title: "64 Creative Marketing Ideas to Boost Your Business",
    badgeText: "Entertainment",
    imageSrc:
      "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/don_quixote.jpg",
  },
  {
    title: "64 Creative Marketing Ideas to Boost Your Business",
    badgeText: "Entertainment",
    imageSrc:
      "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/don_quixote.jpg",
  },
  {
    title: "64 Creative Marketing Ideas to Boost Your Business",
    badgeText: "Entertainment",
    imageSrc:
      "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/don_quixote.jpg",
  },
  {
    title: "64 Creative Marketing Ideas to Boost Your Business",
    badgeText: "Entertainment",
    imageSrc:
      "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/don_quixote.jpg",
  },
];

function CardThree({ colProp }) {
  return (
    <Container fluid className="mt-3">
      <Row className="d-flex justify-content-center align-items-center">
        {cardData.map((card, index) => (
          <Col key={index} xs={12} md={6} sm={12} lg={colProp}>
            <ListGroup>
              <ListGroup.Item
                className={`d-flex justify-content-between align-items-center ${styles["list-body"]}`}
              >
                <span className={`${styles["list-title"]}`}>{card.title}</span>
                <Badge className={`${styles["list-badge"]}`}>
                  {card.badgeText}
                </Badge>
                <div className={`${styles["image-parent"]}`}>
                  <Image
                    src={card.imageSrc}
                    className="img-fluid"
                    alt="article"
                  />
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardThree;
