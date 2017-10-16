import React from "react";

export const List = ({ children }) => {
  return (
    <div className="containermyrecipes">
        <div className="row">
            {children}
        </div>
    </div>
  );
};
