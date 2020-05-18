import React from "react";
import {
  Navbar,
  Container,
  Row,
  Nav,
  Form,
  FormControl,
  Button,
  ButtonGroup,
  Carousel,
  Col,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import FunnyImg from "../Pages/FunnyImg";
import Contact from "../Pages/Contact";
import Info from "../Pages/Info";
import Footer from "./Footer";


import searchIcon from "../img/SearchIcon.png";
import header_1 from "../img/header1.png";
import header_2 from "../img/header2.png";
import header_3 from "../img/header3.png";
import stars_1 from "../img/stars1.png";
import stars_2 from "../img/stars2.png";
import stars_3 from "../img/stars3.png";
import More from "../img/More.png";

const btnGroup = (
  <ButtonGroup aria-label="" className="btn-group mr-auto">
    <Button variant="" className="btn my_btn">
      Watch Now
    </Button>
    <Button variant="outline-light" href="/info">
      View Info
    </Button>
    <Button variant="">+ Favorites</Button>
    <Button variant="" size="sm">
      <img src={More} alt="" />
    </Button>
  </ButtonGroup>
);

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      d: 0,
      search: "",
      searchRequest: "",
    };
    this.searchId = 2;
  }
  setSearchId = (id) => {
    this.searchId = id;
    this.setState({ d: id });
  };

  Search = (e) => {
    e.preventDefault();
    window.location.href = `/?search=${this.state.search}`
  };

  formSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <>
        <header>
          <Navbar
            className="my_nav"
            bg=""
            variant=""
            expand="md"
            collapseOnSelect
          >
            <Container fluid>
              <Navbar.Brand href="/" className="my_nbr">
                MOVIE
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-end"
              >
                <Form inline onSubmit={this.Search}>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    value={this.state.search}
                    onChange={this.formSearchChange}
                  />
                  <Button size="sm" className="btn" type="submit" variant="" >
                    <img src={searchIcon} alt="searchIcon" />
                  </Button>
                </Form>
                <Nav>
                  <Nav.Link href="/1">Sign in</Nav.Link>
                  <Nav.Link href="/2">Sign Up</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Carousel className="my_carousel" interval={null}>
            <Carousel.Item>
              <img src={header_1} alt="First slide" />
              <Carousel.Caption className="d-none d-block">
                <Row className="justify-content-md-between align-items-center">
                  <Col md={7} className="text">
                    <h1>The Jungle Book</h1>
                    <p>Adventure Drama Family Fantasy | 106m</p>
                    <img src={stars_1} alt=""></img>
                  </Col>
                  <Col md={5} className="text-right">
                    {btnGroup}
                  </Col>
                </Row>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={header_2} alt="Second slide" />

              <Carousel.Caption className="d-none d-md-block">
                <Row className="justify-content-md-between align-items-center">
                  <Col md={8} className="text">
                    <h1>transformers age of extinction</h1>
                    <p>Fantasy Action Adventure Sci-Fi | 165m</p>
                    <img src={stars_2} alt=""></img>
                  </Col>
                  <Col md={4}>{btnGroup}</Col>
                </Row>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={header_3} alt="Third slide" />

              <Carousel.Caption className="d-none d-md-block">
                <Row className="justify-content-md-between align-items-center">
                  <Col md={8} className="text">
                    <h1>kung fu panda 3</h1>
                    <p>Cartoon Fantasy Action Comedy Adventure Family | 95m</p>
                    <img src={stars_3} alt=""></img>
                  </Col>
                  <Col md={4}>{btnGroup}</Col>
                </Row>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </header>

        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  films={this.props.films}
                  setSearchId={this.setSearchId}
                  d={this.state.searchRequest}
                />
              )}
            />
            <Route exact path="/About" component={About} />
            <Route exact path="/FunnyImg" component={FunnyImg} />
            <Route exact path="/Contact" component={Contact} />
            <Route
              exact
              path="/Info"
              render={() => (
                <Info
                  films={this.props.films}
                  id={this.searchId}
                  d={this.state.d}
                />
              )}
            />
          </Switch>
        </Router>

        <Footer />
      </>
    );
  }
}
