import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron
          style={{ padding: "4%", paddingTop: "0.25%", paddingBottom: "2%" }}
        >
          <h2 style={{ fontSize: "5rem" }}>Team Members</h2>
          <p>
            This project is ceated by a team of 7 members whose details are
            given below.
          </p>
          <Link to="/demo">
            <Button bsStyle="primary">Try Demo</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="/assets/atul.jpg" circle className="profile-pic" />
            <h2>Atul Gaur</h2>
            <p>
              <b>Roll No: </b> 1619210065 <br />
              <b>Department: </b> Computer Science <br />
              <b>Section: </b> A <br />
              <b>Email: </b> atul.sharma052@gmail.com <br />
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="/assets/shivani.jpg" circle className="profile-pic" />
            <h2>Shivani Sharma</h2>
            <p>
              <b>Roll No: </b> 1619210246 <br />
              <b>Department: </b> Computer Science <br />
              <b>Section: </b> A <br />
              <b>Email: </b> shivani.sharma702@gmail.com <br />
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="/assets/ujjwal.jpg" circle className="profile-pic" />
            <h2>Ujjwal Rastogi</h2>
            <p>
              <b>Roll No: </b> 1619210285 <br />
              <b>Department: </b> Computer Science <br />
              <b>Section: </b> A <br />
              <b>Email: </b> rastogiujjwal1@gmail.com <br />
            </p>
          </Col>
        </Row>

        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="/assets/harsh.jpg" circle className="profile-pic" />
            <h2>Harsh Raj</h2>
            <p>
              <b>Roll No: </b> 1619210095 <br />
              <b>Department: </b> Computer Science <br />
              <b>Section: </b> A <br />
              <b>Email: </b> harshr866@gmail.com <br />
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="/assets/abhishek.jpg" circle className="profile-pic" />
            <h2>Abhishek Singh</h2>
            <p>
              <b>Roll No: </b> 1619210019 <br />
              <b>Department: </b> Computer Science <br />
              <b>Section: </b> A <br />
              <b>Email: </b> singhabhishek0407@gmail.com <br />
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="/assets/twinkle.jpg" circle className="profile-pic" />
            <h2>Twinkle Kashyap</h2>
            <p>
              <b>Roll No: </b> 1619210284 <br />
              <b>Department: </b> Computer Science <br />
              <b>Section: </b> A <br />
              <b>Email: </b> twinklekashyap1998@gmail.com <br />
            </p>
          </Col>
        </Row>

        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper" />
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="/assets/divya.jpg" circle className="profile-pic" />
            <h2>Divya Gairola</h2>
            <p>
              <b>Roll No: </b> 1619210087 <br />
              <b>Department: </b> Computer Science <br />
              <b>Section: </b> B <br />
              <b>Email: </b> divya.gairola.98@gmail.com <br />
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper" />
        </Row>
      </Grid>
    );
  }
}
