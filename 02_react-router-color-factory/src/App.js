import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import NewColor from "./NewColor"
import Colors from './Colors'
// import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/colors">
          <Colors />
        </Route>
        <Route exact path="/add">
          <NewColor />
        </Route>
        <Redirect to="/colors"/>
      </Switch>
    </div>
  );
}

export default App;