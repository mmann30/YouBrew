import React from "react";
import { Col, Row, Container } from "../components/Grid";

const NoMatch = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
          <h1>Error 404</h1>
            <img className="img-responsive" src={require("../404img/pagenotfound.png")} alt="You screwed up!" /> 
      </Col>
    </Row>
  </Container>;

export default NoMatch;
 