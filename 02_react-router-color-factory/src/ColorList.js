import React from "react";
import { Link } from "react-router-dom";

function ColorList(colors) {
  console.log(colors);
  return (
    <div>
      <p>Please select a color</p>
      { colors.colors.map( c => {
        return (
          <div>
            <Link to={`./colors/${c.colorName}`}>{c.colorName}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default ColorList;