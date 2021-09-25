import React, {useState} from "react";
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
        console.log(dogData);
        return (
        <div className="dog">
          <h3>{dogData.name}</h3>
          <img src={dogs[dogData.src]} alt={dogData.name} />
        </div>
        )
        })
      }
    </div>
  )
}

export default DogList;