import React, { createContext, useReducer } from 'react';

export const LocationsContext = createContext({
    locations: [],
    addlocation: (locationData: { name: string, temp: number, description: string, humidity: number }) => { },
    setlocations: (locations: []) => { },
    deletelocation: (name: string) => { },
});


function locationsReducer(state: any, action: any) {
    switch (action.type) {
        case 'CREATE_LOCATION':
            localStorage.setItem(action.payload.name, action.payload)
            return [action.payload, ...state]
        case 'SET_LOCATIONS':
            return action.payload;
        case 'DELETE_LOCATION':
            localStorage.removeItem(action.payload)
            console.log(action.payload);
            console.log(state);
            return state.filter((location: { name: string, temp: number, description: string, humidity: number }) => location.name !== action.payload)
        default:
            return state;
    }
}

type Props = {
    children?: React.ReactNode
};

function LocationsContextProvider({ children }: Props) {

    const [locationState, dispatch] = useReducer(locationsReducer, []);
    function addlocation(locationData: any) {
        dispatch({ type: 'CREATE_LOCATION', payload: locationData });
    }
    function setlocations(locations: []) {
        dispatch({ type: 'SET_LOCATIONS', payload: locations });
    }
    function deletelocation(name: string) {
        console.log(name);
        dispatch({ type: 'DELETE_LOCATION', payload: name });
    }

    const value = {
        locations: locationState,
        setlocations: setlocations,
        addlocation: addlocation,
        deletelocation: deletelocation,
    };

    return (
        <LocationsContext.Provider value={value}>
            {children}
        </LocationsContext.Provider>)
}

export default LocationsContextProvider;