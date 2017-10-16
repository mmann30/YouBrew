import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
// import { Redirect } from 'react-router';



class SignIn extends Component {

state = {
    email: "",
    password: "",
    submitted: false,
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.signIn({
        email: this.state.email,
        password: this.state.password
      })
        .then(this.setState({submitted : true, email: "", password: ""}))
        // .then(this.setState({ fireRedirect: true }))
        .catch(err => console.log(err))
        .then(this.state.submitted:true)
    }

  };
            
  render() {
    if (this.state.submitted) {
      return (
        <Redirect to="/availability"/>
      )
    }
    // const { from } = this.props.location.state || '/'
    // const { fireRedirect } = this.state

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <h1>Welcome to YouBrew!</h1>
            <p>This is an application that helps commercial beer crafters to overview their stock and also brews in progress. Our app is the link between the brewer and the sales force and will help you with the following tasks.</p>
            <form>
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
                disabled={!(this.state.email && this.state.password)}
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

export default withRouter(SignIn);

// {fireRedirect && (
//           <Redirect to={from || '/availability'}/>)}