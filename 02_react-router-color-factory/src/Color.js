import React from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import "./Color.css"

function Color({colors}) {
  const history = useHistory();
  const { color } = useParams();
  const c = colors.filter( c=> c.colorName === color );
  const home = ()=> history.push("/colors");

  if(c.length !== 1) {
    return <Redirect to="/colors" />
  } else {
    const colorText = color.charAt(0).toUpperCase() + color.slice(1);
    return (
      <div className="Color" style={{ backgroundColor: c[0].colorValue }}>
        <p>This is {colorText}</p>
        <p>Isn't it beautiful?</p>
        <button onClick={home}>Go Back</button>
      </div>
    );
  }
}

export default Color;
