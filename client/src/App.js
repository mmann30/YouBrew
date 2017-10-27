import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Availability from "./pages/Availability";
import MySales from "./pages/MySales";
import Request from "./pages/Request";
import MyRecipes from "./pages/MyRecipes";
import Admin from "./pages/Admin";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Input, TextArea, FormBtn } from "./components/Form"

var sessionStorage = require('web-storage')().sessionStorage;

var auth = false;
var admin = false;

if (!sessionStorage.get("access_token"))
{auth = false
}
else {auth = true};
console.log("auth: " + auth);

if (!sessionStorage.get("admin_token"))
{admin = false
}
else {admin = true};
console.log("admin: "+ admin)

const ReRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth?  (
      <Redirect to={{
        pathname: '/availability',
        state: { from: props.location }
      }}/>
    ): (
      <Component {...props}/>
    )
  )}/>
)

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
        <ReRoute exact path="/" component={SignIn} />
        <ReRoute exact path="/signin" component={SignIn} />
        <PrivateRoute exact path="/availability" component={Availability} />
        <PrivateRoute exact path="/mysales" component={MySales} />
        <PrivateRoute exact path="/request" component={Request} />
        <AdminPrivateRoute exact path="/admin" component={Admin} />
        <PrivateRoute exact path="/myrecipes" component={MyRecipes} />
        <Route exact path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
      {/* {<Footer />} */}
    </div>
  </Router>;

export default App;
