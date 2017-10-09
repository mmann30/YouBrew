import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//import Nav from "../components/Nav";


class Availability extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-9">
            <div id="availability">
          		<div className="panel panel-warning">
          			<div className="panel-heading">
          				<h3 className="panel-title">Avalable Brews</h3>
          				{/* <span className="pull-right clickable"><i className="glyphicon glyphicon-chevron-up"></i></span> */}
          			</div>
          			<div className="panel-body">Beer XYZ
          			  <label>
                    {/* <input type="checkbox" value="Option 1"></input> */}
                  </label>
          			</div>
          		</div>
          	</div>
          </Col>
          <Col size="md-9">
            <div id="availability2">
              <div className="panel panel-warning">
               <div className="panel-heading">
                 <h3 className="panel-title">Brews in process</h3>
                 {/* <span className="pull-right clickable"><i className="glyphicon glyphicon-chevron-up"></i></span> */}
               </div>
               <div className="panel-body">Beer XYZ</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Availability;
