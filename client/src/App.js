import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Availability from "./pages/Availability";
import MySales from "./pages/MySales";
import Request from "./pages/Request";
import Admin from "./pages/Admin";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
var sessionStorage = require('web-storage')().sessionStorage;

var auth = false;
var admin = false;

if (!sessionStorage.get("access_token"))
{auth = false
}
else {auth = true};

if (sessionStorage.get("admin_token") === false)
{admin = false
}
else {admin = true};


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const AdminPrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth && admin ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const About = () => <h1>About Us</h1>

const App = () =>

  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <PrivateRoute exact path="/availability" component={Availability} />
        <PrivateRoute exact path="/mysales" component={MySales} />
        <PrivateRoute exact path="/request" component={Request} />
        <AdminPrivateRoute exact path="/admin" component={Admin} />
        <Route exact path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
