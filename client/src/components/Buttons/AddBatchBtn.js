import React from "react";

export const AddBatchBtn = props =>
  <button {...props} style={{ float: "left" }} className="btn btn-success" id="adminBtn">
    {props.children}
  </button>;