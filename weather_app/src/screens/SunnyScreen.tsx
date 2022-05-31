import React, {useEffect, useState} from "react";

// import { Sun } from '../styles/images';
import sunny from '../assets/sun.svg';

import Search from "../components/SearchBar/Search";

import {ResponseData} from "../components/SearchBar/constants";
import axios from "axios";

const SunnyScreen:React.FC = () => {

    const [initialData, setInitialData] = useState<ResponseData>({
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
    });

    const[data,setData] = useState<ResponseData>({
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
    });

    const onLoadGetRequestUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tirana?unitGroup=metric&include=days&key=T8F4NJ3HKJVN9BQNVJLVMSGJE&contentType=json`;


    useEffect(() => {
        axios.get(onLoadGetRequestUrl).then((res) => {
            setInitialData(res.data);
        });
    })

    const[location, setLocation] = useState<string>('');

    const[errorMsg, setErrorMsg] = useState<string>('');

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days&key=T8F4NJ3HKJVN9BQNVJLVMSGJE&contentType=json`;

    const searchLocation = (event: { key: string; }) => {
        if(event.key===("Enter")) {
            axios.get(url).then((response: any) => {
                setData(response.data);
                setInitialData({
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
        <div className="background">
            <div className="weatherLogo">
                <img src={sunny} alt="sunnyLogo" className="sunImg" />
            </div>
          <div className="container">
            <div className="card custom-card">
                <div className="card-body">
                    <div className="inputWrapper">
                        {/*<input type="text" className="form-control searchInput" placeholder="Search" />*/}
                        <Search searchLocation={(event) => searchLocation(event)}
                                handleInputChange={(event) => setLocation(event.target.value)}/>
                    </div>
                    {initialData ? <div className="infoWrapper">
                        <div className="stats">
                            <h2>{ initialData.resolvedAddress }</h2>
                            <h3>{ initialData.days[0].temp }</h3>
                            <h3>{ initialData.days[0].description }</h3>
                        </div>
                        <div className="otherStats pt-5 pb-3">
                            <h3>{ initialData.days[0].humidity }</h3>
                            <h3>Wind Speed: { initialData.days[0].windSpeed }</h3>
                        </div>
                        <div className="pt-2">
                            <h3>{errorMsg}</h3>
                        </div>
                    </div> : <div className="infoWrapper">
                        <div className="stats">
                            <h2>{ data.resolvedAddress }</h2>
                            <h3>{ data.days[0].temp }</h3>
                            <h3>{ data.days[0].description }</h3>
                        </div>
                        <div className="otherStats pt-5 pb-3">
                            <h3>{ data.days[0].humidity }</h3>
                            <h3>Wind Speed: { data.days[0].windSpeed }</h3>
                        </div>
                        <div className="pt-2">
                            <h3>{errorMsg}</h3>
                        </div>
                    </div>}
                    {/*<div className="infoWrapper">
                        <div className="stats">
                            <h2>{ data.resolvedAddress }</h2>
                            <h3>{ data.days[0].temp }</h3>
                            <h3>{ data.days[0].description }</h3>
                        </div>
                        <div className="otherStats pt-5 pb-3">
                            <h3>{ data.days[0].humidity }</h3>
                            <h3>Wind Speed: { data.days[0].windSpeed }</h3>
                        </div>
                        <div className="pt-2">
                            <h3>{errorMsg}</h3>
                        </div>
                    </div>*/}
                </div>
            </div>
          </div>
        </div>
    );
}

export default SunnyScreen;
