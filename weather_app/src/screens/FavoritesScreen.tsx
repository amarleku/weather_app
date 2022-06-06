import React, { useState, useContext, useEffect } from "react";


import BackgroundComponent from "../components/BackgroundComponent";
import {LocationsContext} from "../store/location-context.";
import WeatherScreen from "./WeatherScreen";

const FavoritesScreen:React.FC = () => {

    useEffect(() => {
        if(favoritesLocation.length == 1) {
            setShowMessage(true);
        }
    });

    const [showMessage, setShowMessage] = useState<boolean>(false);
    const [showMainScreen, setShowMainScreen] = useState<boolean>(false);
    const [location, setLocation] = useState<any>();

    const favoritesLocation = useContext(LocationsContext).locations;
    const setClickedLocation = useContext(LocationsContext).chooseClickedLocation;
    const contextHandler = useContext(LocationsContext);


    const goBackToSearch = (clickedLocation:string) => {
        setShowMainScreen(true);
        setClickedLocation(clickedLocation);
    }

    const goBackToMain = () => {
        setShowMainScreen(true);
    }

    const removeFromFavorite = (index: number) => {
        setLocation(favoritesLocation[index + 1]);
        contextHandler.removeLocation(location);
        
        favoritesLocation.splice(index + 1, 1);
        console.log(favoritesLocation);
    }


    return( 
        <>
            {showMainScreen ? <WeatherScreen /> :
            <>
            <BackgroundComponent conditions="clear" hour={12}/>
            <div className="container">
                <div className="card custom-card">
                    <div className="card-body">
                        <div className="header-wrapper">
                            <h2 className="favorite-header">Your Favorite City Selections!</h2>
                        </div>
                        {!showMessage ? <div className="locationsWrapper">
                            {favoritesLocation.slice(1).map((item, index) => (
                                <>
                                <div className="locations" key={index}>
                                    <h1 className="location-header" onClick={() => goBackToSearch(item.toLocaleString())}><b><i>{ item.toLocaleString() }</i></b></h1>
                                    <button onClick={() => removeFromFavorite(index)} className="btn btn-danger remove-btn">Remove</button>
                                </div>
                                </>
                            ))}
                        </div> :
                        <>
                        <div className="no-favorites">
                            <h2>You have currently no favorite locations!</h2>
                        </div>
                        <div>
                            <h2 className="go-back" onClick={() => goBackToMain()}>Go back to Forecast!</h2>
                        </div>
                        </> }
                    </div>
                </div>
            </div>
            </>
            }
        </>
    );
}

export default FavoritesScreen;
