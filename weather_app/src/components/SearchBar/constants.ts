import React from "react";

export interface ResponseData {
    address: string;
    days: [{
        datetime: string,
        temp: string,
        tempmax: string,
        description: string,
        humidity: string,
        windspeed: string,
        feelslikemax: string,
    }]
    errorMsg: string
}

export interface Props {
    searchLocation: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

