import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function NewColor({addColor}) {
  const history = useHistory();
  const INITIAL_VALUE = { colorName:"", colorValue:"" }
  const [ newColor, setNewColor ] = useState(INITIAL_VALUE);
  
  const handleChange = (e) =>{
    setNewColor( {...newColor, [e.target.name]: e.target.value} );
  }

  const submitNewColor = (e)=> {
    e.preventDefault();
    newColor.colorName = newColor.colorName.toLowerCase();
    addColor(newColor);
    setNewColor(INITIAL_VALUE);
    history.push("/colors");
  }

  return (
    <div className="NewColor">
      <form onSubmit={submitNewColor}>
        <div className="inputGroup">
          <label>Color Name</label>
          <input
            type="text"
            name="colorName"
            placeholder="Color Name"
            // value='colorName'
            onChange={handleChange}
          />
        </div>
        <div className="inputGroup">
          <label>Color Value</label>
          <input
            type="color"
            name="colorValue"
            placeholder="Color Name"
            // value='color'
            onChange={handleChange}
          />
        </div>
        <button onSubmit={addColor}>Add this color</button>
      </form>
    </div>
  );
}

export default NewColor;
