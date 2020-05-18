import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  Button,
  ButtonToolbar,
  ButtonGroup,
} from "react-bootstrap";
import information from "../img/information.png";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: [
        { value: (element) => element },
        { value: (element) => element.ranking >= 7 },
        { value: (element) => element.year === date.getFullYear() },
        { value: (element) => element.year > date.getFullYear() },
        {
          value: (element) =>
            element.genre.findIndex((genre) => genre === "Drama") >= 0,
        },
        {
          value: (element) =>
            element.genre.findIndex((genre) => genre === "Action") >= 0,
        },
        {
          value: (element) =>
            element.genre.findIndex((genre) => genre === "Fantasy") >= 0,
        },
        {
          value: (element) =>
            element.genre.findIndex((genre) => genre === "Historical") >= 0,
        },
      ],
      idFilters: 0,
      page: 0,
    };
    this.maxPages = 0;
    var date = new Date();
    //console.log(date.getFullYear()+ '.'+date.getMonth())
  }

  selectFilter = (eventKey) => {
    this.setState({ idFilters: eventKey - 1, page: 0 });
  };

  prevPage = () => {
    if (this.state.page > 0) {
      this.setState((state) => {
        return { page: state.page - 1 };
      });
    }
  };

  nextPage = () => {
    if (this.state.page < this.maxPages - 1) {
      this.setState((state) => {
        return { page: state.page + 1 };
      });
    }
  };

  clickPage = (page) => {
    this.setState({ page: page });
  };

  searchFilm = () => {};

  render() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');
    const films = search ? this.props.films.filter((v) => v.name.toLowerCase().includes(search.toLowerCase())) : this.props.films
    const filter = films.filter(this.state.filters[this.state.idFilters].value);
    const drawing = filter
      .filter(
        (element, num) =>
          num >= this.state.page * 12 && num < (this.state.page + 1) * 12
      )
      .map((element) => {
        let genre = "";
        element.genre.forEach((element) => {
          genre += element + " ";
        });

        return (
          <Col lg={3} md={6} sm={12} className="px-1" key={element.id}>
            <Button
              className="post-image"
              style={{ backgroundImage: `url(${element.src})` }}
              href={`/Info?id=${element.id}`}
            ></Button>
            <Row className="description py-3 pr-3">
              <Col className="d-flex flex-column">
                <h5>{element.name}</h5>
                <span>{genre}</span>
                <span>{element.year}</span>
              </Col>
              <div className="d-flex align-items-center rat">
                <span>{element.ranking}</span>
              </div>
            </Row>
          </Col>
        );
      });
    this.maxPages = Math.ceil(filter.length / 12);
    let numberPage = [];
    for (let i = 0; i < this.maxPages; i++) {
      numberPage.push(
        <Button
          active={i === this.state.page ? true : false}
          key={i}
          className="m-1"
          size="sm"
          onClick={() => this.clickPage(i)}
        >
          {i + 1}
        </Button>
      );
    }
    return (
      <main>
        <Container fluid className="main">
          <Nav
            variant="tabs"
            defaultActiveKey="1"
            onSelect={this.selectFilter}
            className="nav-tabs"
          >
            <Nav.Item>
              <Nav.Link eventKey="1">All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2">Top Rated</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3">New Arrivals</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4">Coming Soon</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Genre" id="nav-dropdown">
              <NavDropdown.Item eventKey="5">Drama</NavDropdown.Item>
              <NavDropdown.Item eventKey="6">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="7">Fantasy</NavDropdown.Item>
              <NavDropdown.Item eventKey="8">Historical</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Row className="films no-gutters">{drawing}</Row>
          <Row className="justify-content-between mt-4">
            <Col lg={1}>
              <Button onClick={this.prevPage}>Prev</Button>
            </Col>
            <Col lg={2}>
              <ButtonToolbar
                aria-label="Toolbar with button groups"
                className="justify-content-center"
              >
                <ButtonGroup aria-label="">{numberPage}</ButtonGroup>
              </ButtonToolbar>
            </Col>
            <Col lg={1}>
              <Button onClick={this.nextPage}>Next</Button>
            </Col>
          </Row>
          <Row className="info no-gutters">
            <Col lg={12} className="px-1">
              <div
                className="post-image"
                style={{ backgroundImage: `url(${information})` }}
              >
                <div className="dark">
                  <h3>
                    Receive information on the latest hit movies straight to
                    your inbox.
                  </h3>
                  <Button className="my_btn">Subscribe</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}
