// Row.js
import React from "react";
import "./Row.css";

const Row = ({Name,Email,Role,Action}) => {
  return (
    <div className="row">
      <div className="column">
        <input type="checkbox" className="checkbox-input" />
      </div>
      <div className="column">{Name}</div>
      <div className="column">{Email}</div>
      <div className="column">{Role}</div>
      <div className="column">{Action}</div>
    </div>
  );
}

export default Row;
