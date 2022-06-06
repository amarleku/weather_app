import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

// Component Imports
import Search from "../components/SearchBar/Search";
import BackgroundComponent from "../components/SearchBar/BackgroundComponent";
import Footer from '../screens/Footer';
import {LocationsContext} from "../store/location-context.";
import {FaStar} from "react-icons/fa";
import FavoritesScreen from "./FavoritesScreen";

// Import Data Types
import { ResponseData } from "../components/SearchBar/constants";


// Icon Imports
import sunIcon from '../assets/StatusIcons/Sunny.svg';
import rainIcon from '../assets/StatusIcons/Rain.svg';
import moonIcon from '../assets/StatusIcons/Moon.svg';

const SunnyScreen: React.FC = () => {

    const [location, setLocation] = useState<string>('');
    const [showFavorites, setShowFavorites] = useState<boolean>(false);
    const [showFavoriteActions, setShowFavoriteActions] = useState<boolean>(false);
    const [favoriteToggle, setFavoriteToggle] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>('');
    
    const clickedLocation = useContext(LocationsContext).clickedLocation;
    const addedLocations = useContext(LocationsContext).locations;

    const favoriteUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${clickedLocation}?unitGroup=metric&include=days&key=T8F4NJ3HKJVN9BQNVJLVMSGJE&contentType=json`;

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days&key=T8F4NJ3HKJVN9BQNVJLVMSGJE&contentType=json`;

    const defaultURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tirana?unitGroup=metric&include=days&key=T8F4NJ3HKJVN9BQNVJLVMSGJE&contentType=json';


    useEffect(() => {
        if(addedLocations.length != 1) {
            setFavoriteToggle(true);
        }
        if(clickedLocation.length != 0){
            setLocation(clickedLocation);
            setShowFavoriteActions(true);
            axios.get(favoriteUrl).then((response: any) => {
                setData(response.data);
                setErrorMsg('');
            }).catch((error) => {
                setErrorMsg(error.response.data);
            });
        }else{
            axios.get(defaultURL).then((response: any) => {
                setData(response.data);
            });
        }
    }, []);

    const [data, setData] = useState<ResponseData>({
        address: '',
        days: [
            {
                conditions: '',
                datetime: '',
                datetimeEpoch: 0,
                temp: '',
                tempmax: '',
                description: '',
                humidity: '',
                windspeed: '',
                feelslikemax: ''
            }
        ],
        errorMsg: ''
    });

 
    const removeFav = useContext(LocationsContext).removeLocation;
    const addFav = useContext(LocationsContext).addLocation;
    // const isFavoriteLocation = useContext(LocationsContext).locations.includes(location);

    const changeFavoriteStatusHandler = () => {
        if(favoriteToggle){
            setFavoriteToggle(!favoriteToggle);
            removeFav(location);
        }else{
            setFavoriteToggle(!favoriteToggle);
            addFav(location);
        }
    }

    const goToFavoriteLocations = () => {
        setShowFavorites(!showFavorites);
    }

    const searchLocation = (event: { key: string; }) => {
        if (event.key === ("Enter")) {
            setFavoriteToggle(false);
            axios.get(url).then((response: any) => {
                setShowFavoriteActions(true);
                setData(response.data);
                setErrorMsg('');
            }).catch((error) => {
                if(location === '') {
                    setErrorMsg("Please enter a location on the search bar!");
                }else {
                    setErrorMsg(error.response.data);
                }
            });
        }
    }

    const currentTime = new Date().getHours();

    return (
        <>
            {showFavorites ? <FavoritesScreen /> :
            <>
            <BackgroundComponent conditions={data.days[0].conditions} hour={currentTime} /> 
            <div className="container">
                <div className="card custom-card">
                    <div className="card-body">
                        <div className="inputWrapper">
                            <Search searchLocation={(event) => searchLocation(event)}
                                handleInputChange={(event) => setLocation(event.target.value)} />
                        </div>
                        <div className="favorite-controls">
                            <div className="actions">
                                {showFavoriteActions ? <FaStar
                                    onClick={changeFavoriteStatusHandler} className={"favorite-star"}
                                    style={favoriteToggle ? {color: 'yellow' } : {color: 'grey' }}
                                /> : ''}
                                <h4 className="favorite-btn"
                                    onClick={goToFavoriteLocations}> Show favorites
                                </h4>
                            </div>
                        </div>
                        <div className="infoWrapper">
                            {errorMsg === '' ? data.days.slice(0, 5).map((item, index) => (
                                <div className="stats" key={index}>
                                    <h3 className="date-header">{item.datetime}</h3>
                                    <h4 className="pt-4">{data.address}</h4>
                                    <h4> <b><i>{item.tempmax}°C</i></b>
                                    <img src={item.conditions.toLowerCase().includes('clear') && currentTime > 18 ? sunIcon : 
                                                item.conditions.toLowerCase().includes('clear') && currentTime < 18 ? moonIcon : 
                                                item.conditions.toLowerCase().includes('cloudy') && currentTime > 18 ? moonIcon :
                                                item.conditions.toLowerCase().includes('cloudy') && currentTime < 18 ? rainIcon : ''} 
                                    className={'small-icon'}/>                                    
                                     </h4>
                                    <h5>{item.description}</h5>
                                    <h5 className="pt-4">Humidity: {item.humidity}%</h5>
                                    <h5>Wind Speed: {item.windspeed}</h5>
                                    <h5><b><i>Feels Like: {item.feelslikemax}°C</i></b></h5>
                                </div>
                            )) : <div><h2>{errorMsg}</h2></div>}
                        </div>
                    </div>
                </div>
            </div>
            </ >
            }
        </>
    );
}

export default SunnyScreen;
