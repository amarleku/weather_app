import React, { useState, useContext, useEffect } from "react";


import BackgroundComponent from "../components/SearchBar/BackgroundComponent";
import {LocationsContext} from "../store/location-context.";
import SunnyScreen from "./SunnyScreen";

const FavoritesScreen:React.FC = () => {

    const [showMessage, setShowMessage] = useState<boolean>(false);

    const favoritesLocation = useContext(LocationsContext).locations;
    const setClickedLocation = useContext(LocationsContext).chooseClickedLocation;

    const [showMainScreen, setShowMainScreen] = useState<boolean>(false);

    const goBackToSearch = (clickedLocation:string) => {
        setShowMainScreen(true);
        setClickedLocation(clickedLocation);
    }

    const goBackToMain = () => {
        setShowMainScreen(true);
    }

    useEffect(() => {

        if(favoritesLocation.length == 1) {
            setShowMessage(true);
        }
    });

    return( 
        <>
            {showMainScreen ? <SunnyScreen /> :
            <>
            <BackgroundComponent conditions="clear" hour={12}/>
            <div className="container">
                <div className="card custom-card">
                    <div className="card-body">
                        <div className="header-wrapper">
                            <h2 className="favorite-header">Your Favorite City Selections!</h2>
                        </div>
                        {!showMessage ? <div className="locationsWrapper">
                            {favoritesLocation.map((item, index) => (
                                <div className="locations" key={index} onClick={() => goBackToSearch(item.toLocaleString())}>
                                    <h1 className="location-header"><b><i>{ item.toLocaleString() }</i></b></h1>
                                </div>
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
                        {/* <div className="locationsWrapper">
                            {favoritesLocation.map((item, index) => (
                                <div className="locations" key={index} onClick={() => goBackToSearch(item.toLocaleString())}>
                                    <h1 className="date-header"><b><i>{ item.toLocaleString() }</i></b></h1>
                                </div>
                            ))}
                        </div>
                        <div className="no-favorites">
                            <h2>You have currently no favorite locations!</h2>
                        </div>*/}
                    </div>
                </div>
            </div>
            </>
            }
        </>
    );
}

export default FavoritesScreen;
