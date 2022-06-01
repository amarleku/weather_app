import React from "react";

export interface ResponseData {
    address: string;
    days: [{
        datetime: string,
        temp: string,
        description: string,
        humidity: string,
        windSpeed: string
    }]
    errorMsg: string
}

export interface Props {
    searchLocation: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

