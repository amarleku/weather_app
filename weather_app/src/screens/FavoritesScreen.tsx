import React, { useState, useContext } from "react";


import BackgroundComponent from "../components/SearchBar/BackgroundComponent";
import {LocationsContext} from "../store/location-context.";
import SunnyScreen from "./SunnyScreen";

const FavoritesScreen:React.FC = () => {

    const favoritesLocation = useContext(LocationsContext).locations;
    const setClickedLocation = useContext(LocationsContext).chooseClickedLocation;

    const [showMainScreen, setShowMainScreen] = useState<boolean>(false);

    const goBackToMainScreen = () => {
        setShowMainScreen(true);
    }

    const goBackToSearch = (clickedLocation:string) => {
        setShowMainScreen(true);
        setClickedLocation(clickedLocation);
    }

    const[errorMsg, setErrorMsg] = useState<string>('');

    // const searchLocation = (event: { key: string; }) => {
    //     if(event.key===("Enter")) {
    //         axios.get(url).then((response: any) => {
    //             setData(response.data);
    //             setErrorMsg('');
    //         }).catch((error) => {
    //             setErrorMsg(error.response.data);
    //         });
    //     }
    // }

    return(
        <>
            {/* <BackgroundComponent /> */}
            {showMainScreen ? <SunnyScreen /> : <div className="container">
                <div className="card custom-card">
                    <div className="card-body">
                        <div className="inputWrapper">
                            {/*<Search searchLocation={(event) => searchLocation(event)}*/}
                            {/*        handleInputChange={(event) => setLocation(event.target.value)}/>*/}
                        </div>
                        <button onClick={goBackToMainScreen}>Go back to main Screen</button>
                        <div className="infoWrapper">
                            {errorMsg == '' ? favoritesLocation.slice(0).map((item, index) => (
                                <div className="stats" key={index} onClick={() => goBackToSearch(item.toLocaleString())}>
                                    <h2 className="date-header">{ item.toLocaleString() }</h2>
                                    {/*<h3 className="pt-4">{ data.address }</h3>*/}
                                    {/*<h3> { item.temp }°C</h3>*/}
                                    {/*<h3> { item.description } </h3>*/}
                                    {/*<h3 className="pt-4">Humidity: { item.humidity }%</h3>*/}
                                    {/*<h3>Wind Speed: { item.windSpeed }</h3>*/}
                                </div>
                            )): <div><h2>{ errorMsg }</h2></div>}
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default FavoritesScreen;