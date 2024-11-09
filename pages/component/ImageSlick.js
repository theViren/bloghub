import React, { useRef } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Badge } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/CardFour.module.css"; // Make sure to adjust the path to your module CSS file

function ImageSlick() {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Container fluid className="mt-3">
      <Row className="d-flex justify-content-center align-items-center">
        <Slider
          ref={sliderRef}
          {...sliderSettings}
          className="slick-slider"
          style={{ overflowX: "hidden" }}
        >
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
          ))}{" "}
        </Slider>
        <div className="slider-controls" style={{ position: "relative" }}>
          <FontAwesomeIcon
            icon={faAnglesLeft}
            className="slider-control-icon left slider-custom-left"
            onClick={handlePrevSlide}
          />
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="slider-control-icon right slider-custom-right"
            onClick={handleNextSlide}
          />
        </div>
      </Row>
    </Container>
  );
}

export default ImageSlick;
