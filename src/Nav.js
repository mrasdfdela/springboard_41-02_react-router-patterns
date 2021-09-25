import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="NavLinks">
      
      <NavLink to="/dogs" >Dogs</NavLink>
      <NavLink to="/dogs/:name" >DogNames</NavLink>
    </div>
  )
}

export default Nav;