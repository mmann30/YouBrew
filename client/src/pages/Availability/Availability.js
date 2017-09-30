import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";

class Availability extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <h1>Welcome to YouBrew!</h1>
            <p>This is an application that helps commercial beer crafters to overview their stock and also brews in progress. Our app is the link between the brewer and the sales force and will help you with the following tasks.</p>
            <ul>
                <li>Real time view of available inventory</li>
                <li>Overview of brews in progress</li>
                <li>Live updates on executed sales</li>
                <li>Sales overview</li>
            </ul>
            <img id="youbrewassets" className="img-responsive" src="../assets/images/youbrewassets.png" />
            <div className="assetsimage">
            </div>
          </Col>
          <Col size="md-4">

          </Col>
        </Row>
      </Container>
    )
  }
}

export default Availability;
