import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Contact extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row className="align-items-center text-center">
          <Col>
            <h2>My email: sasha.karnaushenko@gmail.com</h2>
          </Col>
          <Col>
            <h2>My phone: 123-456-789</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}
