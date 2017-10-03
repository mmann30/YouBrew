import React from "react";

const Nav = () =>
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <img id="logo" alt="YouBrew" src="assets/images/YouBrewv3.png" />
    </div>

    <div id="navbar" className="navbar-collapse collapse col-lg-4 col-lg-offset-6">
      <ul className="nav navbar-nav">
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li className="active"><a href="/">Home<span className="sr-only">(current)</span></a></li>
        <li><a href="availability">Availability</a></li>
        <li><a href="mysales">My Sales</a></li>
        <li><a href="request">Request</a></li>
        <li><a href="admin" className="administrator">Administrator</a></li>
      </ul>
    </div>
  </nav>

export default Nav;
