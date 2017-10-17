import React from "react";

export const SelectItem = props =>
  <option className="select-option" value={props.children}>
    {props.children}
  </option>;
