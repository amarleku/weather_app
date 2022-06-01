import React, { useState } from "react";
import Search from "../components/SearchBar/Search";

import { ResponseData } from "../components/SearchBar/constants";
import axios from "axios";
import './styles/nightScreen.css';
import BackgroundComponent from "../components/SearchBar/BackgroundComponent";


const NightScreen: React.FC = () => {

    const [data, setData] = useState<ResponseData>({
        address: '',
        days: [
            {
                conditions: '',
                datetime: '',
                temp: '',
                description: '',
                humidity: '',
                windSpeed: ''
            }
        ],
        errorMsg: ''
    });

    const [location, setLocation] = useState<string>('');
    
    const [errorMsg, setErrorMsg] = useState<string>('');
    
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days&key=T8F4NJ3HKJVN9BQNVJLVMSGJE&contentType=json`;
    
    const searchLocation = (event: { key: string; }) => {
        if (event.key === ("Enter")) {
            axios.get(url).then((response: any) => {
                setData(response.data);
            }).catch((error: any) => {
                setErrorMsg(error.message);
            });
        }

    }
    return (
        <>
            <BackgroundComponent conditions="" hour={12}/>
            <div className="container">
                <div className="card custom-card">
                    <div className="card-body">
                        <div className="inputWrapper">
                            {/*<input type="text" className="form-control searchInput" placeholder="Search" />*/}
                            <Search searchLocation={(event) => searchLocation(event)}
                                handleInputChange={(event) => setLocation(event.target.value)} />
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
                                    <h2>Prishtine, Kosovo</h2>
                                    <h3>13°C</h3>
                                    <h3>Sunny</h3>
                                </div>
                                <div className="otherStats pt-5 pb-3">
                                    <h3>Humidity: 40%</h3>
                                    <h3>Wind Speed: 100km/h</h3>
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


export default NightScreen;

