import React from 'react';
import { Redirect, Route, Switch} from "react-router-dom";
import defaultProps from './defaultProps';
// import './App.css';

import Nav from './Nav.js';
import DogList from './DogList.js';
import DogDetails from './DogDetails.js';

function App() {
  App.defaultProps = defaultProps;

  return (
    <div className="App">
      <Nav dogList={ App.defaultProps.dogs } />
      <Switch>
        <Route exact path="/dogs" >
          <DogList dogList={ App.defaultProps.dogs }/>
        </Route>
        <Route exact path="/dogs/:name" >
          <DogDetails dogList={ App.defaultProps.dogs }/>
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </div>
  );
}

export default App;
