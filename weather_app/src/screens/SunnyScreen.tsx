import React, {useEffect, useState} from "react";

// import { Sun } from '../styles/images';
import sunny from '../assets/sun.svg';

import Search from "../components/SearchBar/Search";

import {ResponseData} from "../components/SearchBar/constants";
import axios from "axios";
import BackgroundComponent from "../components/SearchBar/BackgroundComponent";

const SunnyScreen:React.FC = () => {

    const [initialData, setInitialData] = useState<ResponseData>({
        name: '',
        days: [
            {
                temp: '',
                description: '',
                humidity: '',
                windSpeed: ''
            }
        ],
        errorMsg: ''
    });

    const[data,setData] = useState<ResponseData>({
        name: '',
        days: [
            {
                temp: '',
                description: '',
                humidity: '',
                windSpeed: ''
            }
        ],
        errorMsg: ''
    });

    const onLoadGetRequestUrl = `https://community-open-weather-map.p.rapidapi.com/forecast/daily`;


    const[location, setLocation] = useState<string>('');

    const[errorMsg, setErrorMsg] = useState<string>('');

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days&key=T8F4NJ3HKJVN9BQNVJLVMSGJE&contentType=json`;

    const searchLocation = (event: { key: string; }) => {
        if(event.key===("Enter")) {
            axios.get(url).then((response: any) => {
                setData(response.data);
                setInitialData({
                    name: '',
                    days: [
                        {
                            temp: '',
                            description: '',
                            humidity: '',
                            windSpeed: ''
                        }
                    ],
                    errorMsg: ''
                })
                setErrorMsg('');
                console.log(response.data);
            }).catch((error) => {
                setErrorMsg(error.response.data);
                console.log(error.response.data);
            });
        }
    }

    return(
        <>
        <BackgroundComponent />
          <div className="container">
            <div className="card custom-card">
                <div className="card-body">
                    <div className="inputWrapper">
                        {/*<input type="text" className="form-control searchInput" placeholder="Search" />*/}
                        <Search searchLocation={(event) => searchLocation(event)}
                                handleInputChange={(event) => setLocation(event.target.value)}/>
                    </div>
                    {/* Mock Weather Info of how forcast can be */}
                    <div className="infoWrapper">
                        <div>
                            <div className="stats">
                                <h2>Tirana, Albania</h2>
                                <h3>13°C</h3>
                                <h3>Sunny</h3>
                            </div>
                            <div className="otherStats pt-5 pb-3">
                                <h3>Humidity: 40%</h3>
                                <h3>Wind Speed: 10km/h</h3>
                            </div>
                        </div>
                        <div>
                            <div className="stats">
                                <h2>Tirana, Albania</h2>
                                <h3>13°C</h3>
                                <h3>Sunny</h3>
                            </div>
                            <div className="otherStats pt-5 pb-3">
                                <h3>Humidity: 40%</h3>
                                <h3>Wind Speed: 10km/h</h3>
                            </div>
                            <div className="pt-2">
                                <h3>{errorMsg}</h3>
                            </div>
                        </div>
                        <div>
                            <div className="stats">
                                <h2>Tirana, Albania</h2>
                                <h3>13°C</h3>
                                <h3>Sunny</h3>
                            </div>
                            <div className="otherStats pt-5 pb-3">
                                <h3>Humidity: 40%</h3>
                                <h3>Wind Speed: 10km/h</h3>
                            </div>
                            <div className="pt-2">
                                <h3>{errorMsg}</h3>
                            </div>
                        </div>
                        <div>
                            <div className="stats">
                                <h2>Tirana, Albania</h2>
                                <h3>13°C</h3>
                                <h3>Sunny</h3>
                            </div>
                            <div className="otherStats pt-5 pb-3">
                                <h3>Humidity: 40%</h3>
                                <h3>Wind Speed: 10km/h</h3>
                            </div>
                            <div className="pt-2">
                                <h3>{errorMsg}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    );
}

export default SunnyScreen;
