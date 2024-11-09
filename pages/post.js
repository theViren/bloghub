import React from "react";
import {
  Card,
  Breadcrumb,
  Badge,
  Button,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import CardThree from "./component/CardThree";
import CardTwo from "./component/CardTwo";
import HomeTitle from "./component/HomeTitle";
import CardFour from "./component/CardFour";
import BreadCrumb from "./component/BreadCrumb";

function Post() {
  return (
    <>
      <Container fluid className="mt-2 p-3">
        <Row>
          <Col md={12}>
 <BreadCrumb/>
          </Col>
          <Col md={12}>
            <h1>
              Tata Nexon की बादशाहत बर्बाद कर दी Maruti की इस एसयूवी ने, बस इतनी
              कीमत पर ये सुविधा और सुरक्षा
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <article className="post-article">
              <p>
                Maruti भारतीय बाजार की सबसे बड़ी कार निर्माता कम्पनी हैं, जिनमें
                से कई अधीक ज्यादा पॉपुलर हैं, लेकिन आज हम Maruti Brezza की बात
                करने वाले हैं जो की अब सब कॉम्पैक्ट एसयूवी सैगमेंट में अपनी
                बादशाहत को फिर से कायम करने में कामयाब रही है।
              </p>
              <h2>Maruti Brezza फीचर्स और सुरक्षा</h2>
              <p>
                Maruti भारतीय बाजार की सबसे बड़ी कार निर्माता कम्पनी हैं, जिनमें
                से कई अधीक ज्यादा पॉपुलर हैं, लेकिन आज हम Maruti Brezza की बात
                करने वाले हैं जो की अब सब कॉम्पैक्ट एसयूवी सैगमेंट में अपनी
                बादशाहत को फिर से कायम करने में कामयाब रही है।
              </p>
            </article>
          </Col>
          <Col md={4}>
            <aside className="post-aside">
              <HomeTitle />
              <CardThree colProp="12" />
              <CardTwo colProp="12" />
            </aside>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Post;
