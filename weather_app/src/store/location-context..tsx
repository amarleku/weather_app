import React, { createContext, useReducer, useState } from 'react';

export const LocationsContext = createContext({
    locations: [{}],
    addLocation: (locationName: string) => { },
    removeLocation: (locationName: string) => { },
});

type Props = {
    children?: React.ReactNode
};

function LocationsContextProvider({ children }: Props) {

    const [favoriteLocations, setFavoriteLocations] = useState(['']);

    function addLocation(locationName: string){
        setFavoriteLocations((currentLocationName: any) => [...currentLocationName, locationName]);
    }

    function removeLocation(locationName: string){
        setFavoriteLocations((currentLocationName: any) => currentLocationName.filter((locName: string) => locName != locationName));
    }

    const value = {
        locations: favoriteLocations,
        addLocation: addLocation,
        removeLocation: removeLocation
    };

    return (
        <LocationsContext.Provider value={value}>
            {children}
        </LocationsContext.Provider>)
}

export default LocationsContextProvider;