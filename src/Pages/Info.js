import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import star from "../img/Info/star.png";
import half_star from "../img/Info/half_star.png";
import empty_star from "../img/Info/empty_star.png";
import {films} from '../const';

export default class Info extends Component {
  render() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const film = films[id];

    const genre = film.genre.map((element) => {
      return element + " ";
    });

    let stars = [];
    for (let i = 1; i <= 10; i++) {
      if (film.ranking / i > 1) {
        stars.push(
          <img
            key={i}
            alt="star"
            src={star}
            width="18"
            height="18"
            className="mr-1"
          />
        );
      } else {
        if (film.ranking % (i - 1) >= 0.5 && film.ranking % (i - 1) < 1) {
          stars.push(
            <img
              key={i}
              alt="star"
              src={half_star}
              width="18"
              height="18"
              className="mr-1"
            />
          );
        } else {
          stars.push(
            <img
              key={i}
              alt="star"
              src={empty_star}
              width="18"
              height="18"
              className="mr-1"
            />
          );
        }
      }
    }

    return (
      <main>
        <Container className="info" fluid>
          <Row>
            <Col lg={4}>
              <img alt="" src={film.src} className="w-100" height="300" />
            </Col>
            <Col lg={8}>
              <Row className="justify-content-center text-left ">
                <Col lg={12} className="text-center">
                  <h1>{film.name}</h1>
                </Col>
                <Col sm={7}>
                  <Row className="align-items-baseline">
                    <Col sm={3}>
                      <h5>Year:</h5>
                    </Col>
                    <Col sm={9}>
                      <p>{film.year}</p>
                    </Col>
                  </Row>
                  <Row className="align-items-baseline">
                    <Col sm={3}>
                      <h5>Genre:</h5>
                    </Col>
                    <Col sm={9}>
                      <p>{genre}</p>
                    </Col>
                  </Row>
                  <Row className="align-items-baseline">
                    <Col sm={3}>
                      <h5>Country:</h5>
                    </Col>
                    <Col sm={9}>
                      <p>country</p>
                    </Col>
                  </Row>
                  <Row className="align-items-baseline">
                    <Col sm={3}>
                      <h5>Actors:</h5>
                    </Col>
                    <Col sm={9}>
                      <p>actors</p>
                    </Col>
                  </Row>
                </Col>
                <Col sm={5} className=" text-right">
                  {stars}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="m-5 description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              voluptatibus! Tempore voluptatum eius reiciendis doloribus in.
              Natus, beatae autem minus ipsa voluptatum voluptates. Assumenda
              adipisci a magni, quas eum harum eligendi voluptates saepe
              explicabo optio vero deserunt soluta sed mollitia cumque, nisi vel
              maxime. Vitae eveniet dolorem ipsum odio architecto unde voluptate
              commodi. Earum, quas itaque. Quibusdam sequi magni assumenda nemo
              odio? Praesentium eaque natus illum aspernatur deserunt minima
              soluta quo fuga ut atque consequatur repudiandae laudantium fugiat
              nulla esse necessitatibus, voluptatem quam vel consectetur facere.
              Consequuntur non culpa pariatur quod iure saepe qui ipsa ipsum,
              necessitatibus nostrum unde aspernatur!
            </p>
          </Row>
        </Container>
      </main>
    );
  }
}
