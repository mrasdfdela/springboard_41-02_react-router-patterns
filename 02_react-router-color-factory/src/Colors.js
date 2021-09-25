import React from "react";
import { Link } from "react-router-dom";

function Colors({colors}) {
  // console.log(colors);
  return (
    <div className="Colors">
      <h3>Welcome to the color factory</h3>
      <h1><Link to="/add">Add a color</Link></h1>
      <p>Please select a color</p>
      <ul>
        { colors.map( c => {
          return (
            <li>
              <Link to={`./colors/${c.colorName}`}>{c.colorName}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Colors;