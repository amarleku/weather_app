import React, { useState } from 'react';
import { Props } from './constants'

const Search:React.FC<Props> = ({ searchLocation, handleInputChange }) => {

    /*const[data,setData] = useState<ResponseData>({

        resolvedAddress: '',
        days: [
            {
                temp: '',
                description: '',
                humidity: '',
                windSpeed: ''
            }
        ],
        errorMsg: ''
    });*/

    // const[location, setLocation] = useState<string>('');

    // const[errorMsg, setErrorMsg] = useState<string>('');

    // const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days&key=T8F4NJ3HKJVN9BQNVJLVMSGJE&contentType=json`;

    /*const searchLocation = (event: { key: string; }) => {
        if(event.key===("Enter")) {
            axios.get(url).then((response: any) => {
                setData(response.data);
                setErrorMsg('');
                console.log(response.data)
            }).catch((error) => {
                setErrorMsg(error.response.data);
                console.log(error.response.data);
            });
        }
    }*/

    return (
        <input
            className="form-control searchInput"
            onChange={handleInputChange}
            onKeyPress={searchLocation}
            placeholder="Search"
            type="text"
        />
            /*<div className="container">
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
                    <p>{data ? data.days[0].windSpeed : ""}</p>
                </div>
                <div className='errorMsg'>
                    <p>{ errorMsg }</p>
                </div>
            </div>*/
    )
}

export default Search;
