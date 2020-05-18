import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container className="mt-5 text-center">
        <Row>
          <Col>
            <h1>My name: Aleando</h1>
            <h5>This is my first site in React.js</h5>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <h3>My linkedin</h3>
          </Col>
          <Col lg={6}>
            <h3>My github</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Button href="https://www.linkedin.com/in/oleksandr-karnaushenko-3a9910198/">
              https://www.linkedin.com/in/oleksandr-karnaushenko-3a9910198/
            </Button>
          </Col>
          <Col lg={6}>
            <Button href="https://github.com/Oleksandr-Karnaushenko">
              https://github.com/Oleksandr-Karnaushenko
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
