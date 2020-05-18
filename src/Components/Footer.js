import React, { Component } from "react";
import { Container, Row, Nav, Button, ButtonGroup, Col } from "react-bootstrap";
import Facebook from "../img/Facebook.png";
import Twitter from "../img/Twitter.png";
import Pinterest from "../img/Pinterest.png";
import Instagram from "../img/Instagram.png";
import YouTube from "../img/YouTube.png";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Container fluid className="footer">
          <Row>
            <Col lg={4} md={6} sm={12} className="f_nav">
              <Nav as="ul">
                <Nav.Item as="li">
                  <Nav.Link href="/About">About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="/FunnyImg">Funny img</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col lg={4} md={6} sm={12} className="logo">
              <h2>
                <Button href="/" size="lg" className="btn1">
                  MOVIE
                </Button>
              </h2>
              <span>Copyright © 2017 MOVIE. All Rights Reserved.</span>
            </Col>
            <Col lg={4} md={6} sm={12} className="icons">
              <ButtonGroup aria-label="">
                <Button
                  href="https://www.facebook.com/"
                  variant=""
                  className="icon"
                  style={{ backgroundImage: `url(${Facebook})` }}
                ></Button>
                <Button
                  href="https://twitter.com/explore"
                  variant=""
                  className="icon"
                  style={{ backgroundImage: `url(${Twitter})` }}
                ></Button>
                <Button
                  href="https://pl.pinterest.com/"
                  variant=""
                  className="icon"
                  style={{ backgroundImage: `url(${Pinterest})` }}
                ></Button>
                <Button
                  href="https://www.instagram.com/?hl=uk"
                  variant=""
                  className="icon"
                  style={{ backgroundImage: `url(${Instagram})` }}
                ></Button>
                <Button
                  href="https://www.youtube.com"
                  variant=""
                  className="icon"
                  style={{ backgroundImage: `url(${YouTube})` }}
                ></Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
