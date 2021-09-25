import React from "react";
import { Link } from "react-router-dom";

function Colors() {
  return (
    <div className="Colors">
      <h3>Welcome to the color factory</h3>
      <h1><Link to="/add">Add a color</Link></h1>
      <p>Please select a color</p>
      <ul>
        <li>red</li>
        <li>green</li>
        <li>blue</li>
      </ul>
    </div>
  );
}

export default Colors;