import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { ReactTableDefaults } from 'react-table'

Object.assign(ReactTableDefaults, {
  defaultPageSize: 5,
  minRows: 3,
  // etc...
});

const data = [{
  name: "Squanchpils",
  style: "Pilsner",
  abv: "5.2"
},
{
  name: "Ipasquanch",
  style: "IPA",
  abv: "5.5"
},
{
  name: "Hefesquanch",
  style: "Hefeweisen",
  abv: "4.6"
}];
const columns = [{
  Header: "Name",
  accessor: "name"
},
{
  Header: "Style",
  accessor: "style"
},
{
  Header: "ABV",
  accessor: "abv"
}];

class Availability extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-10">
            <h1>Inventory</h1>
            <ReactTable className="-striped -highlight"
              data={data}
              columns={columns}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-10">
            <h1>In process</h1>
            <ReactTable
              data={data}
              columns={columns}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Availability;
