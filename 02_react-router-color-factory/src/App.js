import React, { useState } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';

import NewColor from "./NewColor"
import Colors from './Colors'
import Color from './Color'
// import './App.css';

function App() {
  const [colors, setColors] = useState([]);
  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/colors">
          <Colors colors={colors} />
        </Route>
        <Route exact path="/add">
          <NewColor addColor={addColor} />
        </Route>
        <Route path="/colors/:color">
          <Color colors={colors}/>
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
}

export default App;