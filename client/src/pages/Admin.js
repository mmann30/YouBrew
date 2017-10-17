import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { EditBtn , AddRecipeBtn , AddUserBtn , AddBatchBtn } from "../components/Buttons";
import ReactTable from 'react-table';
import Modal from 'react-modal';
import "react-table/react-table.css";
import { ReactTableDefaults } from 'react-table';
import Switch from 'react-toggle-switch';

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

class Admin extends Component {

  state = {
    name: "",
    email: "",
    administrator: "",
    modalIsOpen: false,
    editModalOpen: false,
    userModalOpen: false,
    batchModalOpen: false,
    recipeModalOpen: false
  };

  // componentDidMount() {
  //   this.loadRecipes();
  // }
  //
  // loadRecipes = () => {
  //   API.getRecipes()
  //     .then(res =>
  //       this.setState({ recipes: res.data, name: "", style: "", quantity: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      editModalOpen: false,
      userModalOpen: false,
      batchModalOpen: false,
      recipeModalOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.openUserModal = this.openUserModal.bind(this);
    this.openBatchModal = this.openBatchModal.bind(this);
    this.openRecipeModal = this.openRecipeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  openEditModal() {
    this.setState({
      editModalOpen: true,
      batchModalOpen: false,
      recipeModalOpen: false,
      userModalOpen: false
    });
    this.openModal();
  };

  openUserModal() {
    this.setState({
      userModalOpen: true,
      editModalOpen: false,
      batchModalOpen: false,
      recipeModalOpen: false
    });
    this.openModal();
  };

  openBatchModal() {
    this.setState({
        batchModalOpen: true,
        editModalOpen: false,
        recipeModalOpen: false,
        userModalOpen: false
      });
    this.openModal();
  };

  openRecipeModal() {
    this.setState({
      recipeModalOpen: true,
      editModalOpen: false,
      batchModalOpen: false,
      userModalOpen: false
    });
    this.openModal();
  };

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (



      <Container>

        <Row>
          <Col size="md-10">
            <h1>Access Control</h1>
            <ReactTable className="-striped -highlight"
              data={[{
                name: "Florian Hutter",
                email: "florian.hutter.montreux@gmail.com",
                Administrator: "",
                options: ""
              },
              {
                name: "Florian Hutter",
                email: "florian.hutter.montreux@gmail.com",
                Administrator: "",
                options: ""
              },
              {
                name: "Florian Hutter",
                email: "florian.hutter.montreux@gmail.com",
                Administrator: "",
                options: ""
              }]}
              columns={[{
                Header: "Name",
                accessor: "name",
				        maxWidth: 210,
              },
              {
                Header: "Email",
                accessor: "email"
              },
              {
                Header: "Administrator",
                accessor: "administrator",
				        maxWidth: 100,
              },
              {
                Header: "Options",
                accessor: "options",
				        maxWidth: 60,
                Cell: row => (
                  <div>
                    <EditBtn onClick={this.openEditModal}>Edit</EditBtn>
                    <Modal
                      isOpen={this.state.modalIsOpen}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={modalStyles}
                      contentLabel="Example Modal"
                    >
                    {this.state.editModalOpen ?
                      console.log("EDIT")
                      : this.state.userModalOpen ?
                      console.log("USER")
                      : this.state.batchModalOpen ?
                      console.log("BATCH")
                      : this.state.recipeModalOpen ?
                      console.log("RECIPE")
                      :
                      console.log("nah")
                    }
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

        <AddBatchBtn onClick={this.openBatchModal}>Add new batch</AddBatchBtn>
        <AddRecipeBtn onClick={this.openRecipeModal}>Add new recipe</AddRecipeBtn>
        <AddUserBtn onClick={this.openUserModal}>Add new user</AddUserBtn>

      </Container>
    )
  }
}

export default Admin;
