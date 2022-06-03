import React, { useContext, useState } from "react";
import { LocationsContext } from "../store/location-context";

interface Props {}

function Favorites() {
  const locationCtx = useContext(LocationsContext);
  const [location, setLocation] = useState("");
  const addlocationHandler = async (query: string) => {
    await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/?unitGroup=metric&include=days&key=T8F4NJ3HKJVN9BQNVJLVMSGJE&contentType=json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (!res.status) {
          locationCtx.addlocation(res);
          return res;
        } else {
          alert(res.message);
        }
      });
  };

  //const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'${location}'?unitGroup=metric&include=days&key=T8F4NJ3HKJVN9BQNVJLVMSGJE&contentType=json`;
  const deletelocationHandler = (name: string) => {
    locationCtx.deletelocation(name);
  };
  return (
    <div>
      <input
        /* onChange={event => setLocation(event.target.value)}*/
        placeholder="EnterLocation"
        type="text"
      />
      {/*<button onClick={() => addlocationHandler(location)}>Add location</button>*/}
    </div>
  );
}

export default Favorites;
