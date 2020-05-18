import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import img_1 from "../img/FunnyImg/img_1.jpg";
import img_2 from "../img/FunnyImg/img_2.jpg";
import img_3 from "../img/FunnyImg/img_3.jpg";
import img_4 from "../img/FunnyImg/img_4.png";
import img_5 from "../img/FunnyImg/img_5.jpg";
import img_6 from "../img/FunnyImg/img_6.jpg";

export default class FunnyImg extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col lg={4} className="px-1">
            <img src={img_1} alt="" height="300" width="100%" />
          </Col>
          <Col lg={4} className="px-1">
            <img src={img_2} alt="" height="300" width="100%" />
          </Col>
          <Col lg={4} className="px-1">
            <img src={img_3} alt="" height="300" width="100%" />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col lg={4} className="px-1">
            <img src={img_4} alt="" height="300" width="100%" />
          </Col>
          <Col lg={4} className="px-1">
            <img src={img_5} alt="" height="300" width="100%" />
          </Col>
          <Col lg={4} className="px-1">
            <img src={img_6} alt="" height="300" width="100%" />
          </Col>
        </Row>
      </Container>
    );
  }
}
