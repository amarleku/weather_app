import React, {useEffect, useState, useContext } from "react";

// import { Sun } from '../styles/images';
import sunny from '../assets/sun.svg';

import Search from "../components/SearchBar/Search";

import {ResponseData} from "../components/SearchBar/constants";
import axios from "axios";
import BackgroundComponent from "../components/SearchBar/BackgroundComponent";
import {LocationsContext} from "../store/location-context.";
import {FaStar} from "react-icons/fa";
import FavoritesScreen from "./FavoritesScreen";

const SunnyScreen:React.FC = () => {

    const[location, setLocation] = useState<string>('');

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days&key=T8F4NJ3HKJVN9BQNVJLVMSGJE&contentType=json`;

    const defaultURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tirana?unitGroup=metric&include=days&key=T8F4NJ3HKJVN9BQNVJLVMSGJE&contentType=json';

    useEffect(() => {
        axios.get(defaultURL).then((response: any) => {
            setData(response.data);
        });
    }, []);

    const[data,setData] = useState<ResponseData>({
        address: '',
        days: [
            {
                datetime: '',
                temp: '',
                description: '',
                humidity: '',
                windSpeed: ''
            }
        ],
        errorMsg: ''
    });

    const[errorMsg, setErrorMsg] = useState<string>('');

    const removeFav = useContext(LocationsContext).removeLocation;
    const addFav = useContext(LocationsContext).addLocation;
    const isFavoriteLocation = useContext(LocationsContext).locations.includes(location);

    const changeFavoriteStatusHandler = () => {
        if(isFavoriteLocation){
            removeFav(location);
        }else{
           addFav(location);
        }
    }

    const [showFavorites, setShowFavorites] = useState<boolean>(false);

    const goToFavoriteLocations = () => {
        setShowFavorites(!showFavorites);
        console.log(showFavorites);
    }

    const searchLocation = (event: { key: string; }) => {
        if(event.key===("Enter")) {
            axios.get(url).then((response: any) => {
                setData(response.data);
                setErrorMsg('');
            }).catch((error) => {
                setErrorMsg(error.response.data);
            });
        }
    }

    return(
        <>
            <BackgroundComponent />
            {showFavorites ? <FavoritesScreen /> : 
            <div className="container">
                <div className="card custom-card">
                    <div className="card-body">
                        <div className="inputWrapper">
                            <FaStar
                                onClick={changeFavoriteStatusHandler}
                                style={isFavoriteLocation ? {color: 'yellow' } : {color: 'grey' }}
                            />
                            <button
                                onClick={goToFavoriteLocations}
                                >
                                Show favorites
                            </button>
                            <Search searchLocation={(event) => searchLocation(event)}
                                    handleInputChange={(event) => setLocation(event.target.value)}/>
                        </div>
                        <div className="infoWrapper">
                            {errorMsg == '' ? data.days.slice(0, 5).map((item, index) => (
                                <div className="stats" key={index}>
                                    <h2 className="date-header">{ item.datetime }</h2>
                                    <h3 className="pt-4">{ data.address }</h3>
                                    <h3> { item.temp }°C</h3>
                                    <h3> { item.description } </h3>
                                    <h3 className="pt-4">Humidity: { item.humidity }%</h3>
                                    <h3>Wind Speed: { item.windSpeed }</h3>
                                </div>
                            )): <div><h2>{ errorMsg }</h2></div>}
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    );
}

export default SunnyScreen;
