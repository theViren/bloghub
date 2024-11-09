import React from "react";
import { Card, Badge, Button, Col, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/BlogCard.module.css";

const blogPosts = [
  {
    title: "The Best 18 SEO Tools That SEO Experts Actually",
    image:
      "https://github.com/theViren/React-Practice---Greetings-with-Props/blob/main/anime.jpeg?raw=true",
    tag: "Technology",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "16-Step SEO Audit Process To Google Rankings",
    image:
      "https://github.com/theViren/React-Practice---Greetings-with-Props/blob/main/anime.jpeg?raw=true",
    tag: "Web Development",
    description: "Learn essential tips for effective web development...",
  },
  {
    title: "7 Things You Need to Know About Feature Driven",
    image:
      "https://github.com/theViren/React-Practice---Greetings-with-Props/blob/main/anime.jpeg?raw=true",
    tag: "Technology",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "64 Creative Marketing Ideas to Boost Your Business",
    image:
      "https://github.com/theViren/React-Practice---Greetings-with-Props/blob/main/anime.jpeg?raw=true",
    tag: "Web Development",
    description: "Learn essential tips for effective web development...",
  },
  {
    title: "7 Things You Need to Know About Feature Driven",
    image:
      "https://github.com/theViren/React-Practice---Greetings-with-Props/blob/main/anime.jpeg?raw=true",
    tag: "Technology",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "64 Creative Marketing Ideas to Boost Your Business",
    image:
      "https://github.com/theViren/React-Practice---Greetings-with-Props/blob/main/anime.jpeg?raw=true",
    tag: "Web Development",
    description: "Learn essential tips for effective web development...",
  },
  {
    title: "7 Things You Need to Know About Feature Driven",
    image:
      "https://github.com/theViren/React-Practice---Greetings-with-Props/blob/main/anime.jpeg?raw=true",
    tag: "Technology",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "64 Creative Marketing Ideas to Boost Your Business",
    image:
      "https://github.com/theViren/React-Practice---Greetings-with-Props/blob/main/anime.jpeg?raw=true",
    tag: "Web Development",
    description: "Learn essential tips for effective web development...",
  },
];

const BlogCard = ({ colProp }) => {
  return (
    <Container fluid className="mt-5">
      <Row className="d-flex justify-content-center align-items-center g-0">
        {blogPosts.map((post, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={colProp} className="mb-4">
            <Card className={`${styles["blog-card"]}`}>
              <Card.Img variant="top" src={post.image} />
              <Badge className={`${styles["tag-badge"]}`}>{post.tag}</Badge>
              <Badge className={`${styles["tag-badge-latest"]}`}>Latest</Badge>
              <div className={`${styles["card-body"]}`}>
                <Card.Title className={`${styles["card-title"]}`}>
                  {post.title}
                </Card.Title>
                <hr className={`${styles.divider}`} />
                <Card.Text className={`${styles["card-text"]}`}>
                  {post.description}
                </Card.Text>
                <Button
                  className={`${styles["read-now-btn"]}`}
                  variant="primary"
                >
                  Read Now
                  <FontAwesomeIcon
                    icon={faHandPointer}
                    className={`${styles["btn-icon"]}`}
                  />
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogCard;
