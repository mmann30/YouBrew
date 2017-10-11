import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
var Router = require('react-router');



class SignIn extends Component {

state = {
    name: "",
    email: "",
    password: "",
    isAdmin: false,
    fireRedirect: false,
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.email && this.state.password) {
      API.newUser({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
        .then(this.setState({ name: "", email: "", password: ""}))
        .catch(err => console.log(err));
        Router.browserHistory.push('/mysales');
    }

  };
            
  render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <h1>Welcome to YouBrew!</h1>
            <p>This is an application that helps commercial beer crafters to overview their stock and also brews in progress. Our app is the link between the brewer and the sales force and will help you with the following tasks.</p>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password (required)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Submit User

              </FormBtn>
            </form>
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

export default SignIn;
