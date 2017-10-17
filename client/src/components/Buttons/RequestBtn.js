import React from "react";

export const RequestBtn = props =>
  <button {...props} style={{ float: "left" }} className="btn btn-success" id="requestBtn">
    {props.children}
  </button>;