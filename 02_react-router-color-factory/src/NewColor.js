import React from "react";
import { useHistory } from "react-router-dom";

function NewColor() {
  const history = useHistory();
  const addColor = (e)=> {
    e.preventDefault();
    // console.log(e.target);
    history.push("/colors");
  }

  return (
    <div className="NewColor">
      <form onSubmit={addColor}>
        <div className="inputGroup">
          <label>Color Name</label>
          <input 
            type='text'
            name='colorName'
            // value='colorName'
            />
        </div>
        <div className="inputGroup">
          <label>Color Value</label>
          <input
            type='color'
            name='color'
            // value='color'
            />
        </div>
        <button onSubmit={addColor}>Add this color</button>
      </form>
    </div>
  );
}

export default NewColor;
