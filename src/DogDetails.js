import React, {useState} from "react";
import { useParams, useHistory } from "react-router-dom";
import duke from "./img/duke.jpg";
import tubby from "./img/tubby.jpg";
import perry from "./img/perry.jpg";
import whiskey from "./img/whiskey.jpg";

function DogDetails(dogList) {
  const [dogs, setDogs] = useState({
    duke: duke,
    tubby: tubby,
    perry: perry,
    whiskey: whiskey,
  });

  const history = useHistory();
  const {name} = useParams();
  const dogExists = dogList.dogList.some( d => d.src === name );
  const dog = dogList.dogList.filter( d => {
    return (d.src === name);
  })[0];

  function backHome(timer) {
    setTimeout( ()=> {
      history.push("/dogs");
    }, timer);
  }

  if (dogExists) {
    return (
      <div className="dog">
        <h3>
          {dog.name}, age {dog.age}
        </h3>
        <img src={dogs[dog.src]} alt={dog.name} />
        {dog.facts.map((fact) => (
          <p>{fact}</p>
        ))}
        <button onClick={() => backHome(0)}>Back</button>
      </div>
    );
  } else {
    return (
      <div>
        <p onLoad={backHome(3000)}>{name} is not in our database! Rerouting...</p>
      </div>
    )
  }
}

export default DogDetails;