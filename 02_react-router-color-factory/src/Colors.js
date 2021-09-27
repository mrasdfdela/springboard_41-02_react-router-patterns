import React from "react";
import { Link } from "react-router-dom";
import ColorList from './ColorList'
import "./Colors.css";

function Colors({colors}) {
  // console.log(colors);
  return (
    <div className="Colors">
      <h3>Welcome to the color factory</h3>
      <h1><Link to="/add">Add a color</Link></h1>
      { colors.length > 0 ? <ColorList colors={colors}/> : "" }
    </div>
  );
}

export default Colors;