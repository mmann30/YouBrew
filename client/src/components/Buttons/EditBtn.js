import React from "react";

export const EditBtn = props =>
  <button {...props} style={{ float: "right" }} className="btn btn-danger">
    {props.children}
  </button>;
