import React from "react";

export const OrderBtn = props =>
  <button {...props} style={{ float: "right" }} className="btn btn-success">
    {props.children}
  </button>;
