import React, { Component } from 'react';
import SignIn from "./pages/SignIn";
import Availability from "./pages/Availability";
import MySales from "./pages/MySales";
import Request from "./pages/Request";
import Admin from "./pages/Admin";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>

  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/availability" component={Availability} />
        <Route exact path="/mysales" component={MySales} />
        <Route exact path="/request" component={Request} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </div>
  </Router>;

export default App;
