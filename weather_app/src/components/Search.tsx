import React, { useState } from 'react';
import axios from 'axios';

function Search() {
    const[data,setData] = useState({
        resolvedAddress: '',
        days: [
            {
                temp: '',
                description: '',
                humidity: '',
                windspeed: ''
            }
        ]
    });
    const[location, setLocation] = useState('');

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days&key=T8F4NJ3HKJVN9BQNVJLVMSGJE&contentType=json`;

    const searchLocation = (event: { key: string; }) => {
        if(event.key===("Enter")) {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
        }
    }

    return (
        <div>
            <div className="search">
                <input
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder="EnterLocation"
                type="text"
                />
            </div>
           <div className="container">
                <div className="location">
                    <p>{data ? data.resolvedAddress : ""}</p>
                </div>
               <div className="temperature">
                   <p>{data ? data.days[0].temp : ""}</p>
               </div>
               <div className="description">
                   <p>{data ? data.days[0].description : ""}</p>
               </div>
               <div className="humidity">
                   <p>{data ? data.days[0].humidity : ""}</p>
               </div>
               <div className="windSpeed">
                   <p>{data ? data.days[0].windspeed : ""}</p>
               </div>
           </div>
        </div>
    )
}

export default Search;