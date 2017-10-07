import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

class Availability extends Component {
  render() {
    return (

      <Container fluid>
        <Row>
          <Col size="md-6">

              

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
