import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
//import { InprocessRow } from "../components/TableRow";
import { OrderBtn, EditBtn } from "../components/Buttons";
import ReactTable from 'react-table';
import Modal from 'react-modal';
import "react-table/react-table.css";
import { ReactTableDefaults } from 'react-table'

// this is a react-table feature that allows us to override some defaults
Object.assign(ReactTableDefaults, {
  defaultPageSize: 5,
  minRows: 3,
  // etc...
});

const modalStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.5)'
  },
  content : {
    top               : '40%',
    left              : '50%',
    right             : 'auto',
    bottom            : 'auto',
    marginRight       : '-50%',
    transform         : 'translate(-50%, -50%)'
  }
};

class Availability extends Component {

  state = {
    recipes: [],
    name: "",
    style: "",
    quantity: ""
  };

  componentDidMount() {
    this.loadRecipes();
  }
  
  loadRecipes = () => {
    API.getRecipes()
      .then(res => {
        this.setState({ recipes: res.data, name: "", style: "", quantity: "" })
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const recipes = this.state.recipes;
    return (
      <Container>
        <Row>
          <Col size="md-10">
            <h1>Inventory</h1>
            <ReactTable className="-striped -highlight"
              data={recipes}
              columns={[{
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
              },
              {
                Header: "Options",
                accessor: "options",
                Cell: row => (
                  <div>
                    <EditBtn>Edit</EditBtn>
                    <OrderBtn onClick={this.openModal}>Order</OrderBtn>
                    <Modal
                      isOpen={this.state.modalIsOpen}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={modalStyles}
                      contentLabel="Example Modal"
                    >
                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                      <input />
                      <button>tab navigation</button>
                      <button>stays</button>
                    </form>
                    </Modal>
                  </div>
                ),
              }]}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-10">
            <h1>In process</h1>
            <ReactTable
              data={[{
                name: "Squanchpils",
                style: "Pilsner",
                abv: "5.2",
                options: ""
              },
              {
                name: "Ipasquanch",
                style: "IPA",
                abv: "5.5",
                options: ""
              },
              {
                name: "Hefesquanch",
                style: "Hefeweisen",
                abv: "4.6",
                options: ""
              }]}
              columns={[{
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
              },
              {
                Header: "Options",
                accessor: "options",
                Cell: row => (
                  <OrderBtn>Order</OrderBtn>
                )
              }]}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Availability;
