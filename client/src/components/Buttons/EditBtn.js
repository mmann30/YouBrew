import React from "react";

export const EditBtn = props =>
  <button {...props} className="btn btn-danger editRec">
    {props.children}
  </button>;
