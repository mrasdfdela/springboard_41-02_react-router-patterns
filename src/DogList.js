import React, {useState} from "react";
import { Link } from "react-router-dom";

import duke from "./img/duke.jpg";
import tubby from "./img/tubby.jpg";
import perry from "./img/perry.jpg";
import whiskey from "./img/whiskey.jpg";

function DogList(dogList) {
  const [dogs, setDogs] = useState({ 
    duke: duke ,
    tubby: tubby ,
    perry: perry ,
    whiskey: whiskey
  });
  return (
    <div className="dogList">
      { dogList.dogList.map( (dogData)=>{
        return (
        <div className="dog">
          <h3>{dogData.name}</h3>
          <Link to={`/dogs/${dogData.src}`}>
            <img src={dogs[dogData.src]} alt={dogData.name} />
          </Link>
        </div>
        )
        })
      }
    </div>
  )
}

export default DogList;