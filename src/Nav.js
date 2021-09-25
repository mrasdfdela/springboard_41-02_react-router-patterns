import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(dogList) {
  return (
    <div className="NavLinks">
      { dogList.dogList.map ((dogData) =>{
          let url = `/dogs/${dogData.src}`
          return <NavLink to={url}>{dogData.name}</NavLink>
        })
      }
    </div>
  )
}

export default Nav;