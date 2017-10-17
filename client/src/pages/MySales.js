import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import ReactTable from 'react-table';

var sessionStorage = require('web-storage')().sessionStorage;


class MySales extends Component {
  render() {
    return (
      
 <Container>

        <Row>
          <Col size="md-10">
            <h1>My Sales</h1>
            <ReactTable className="-striped -highlight"
              data={[{
                name: "Beer XYZ",
                style: "Lager",
                quantity: "40 barrels",
                selldate: ""
              },
              {
                name: "Bud Light",
                style: "Weizen",
                Quantity: "20 barrels",
                selldate: ""
              },
              {
                name: "Feldschlösschen",
                style: "Lager",
                quantity: "10 barrels",
                selldate: ""
              }]}
              columns={[{
                Header: "Name",
                accessor: "name",
              },
              {
                Header: "Style",
                accessor: "style"
              },
              {
                Header: "Quantity",
                accessor: "quantity",
                maxWidth: 100,
              },
              {
                Header: "Sell Date",
                accessor: "options",
              
              }]}
            />
          </Col>
        </Row>

        

      </Container>
    )
  }
}



export default MySales;
