import React from "react";

export interface ResponseData {
    address: string;
    days: [{
        conditions: string,
        datetime: string,
        datetimeEpoch: number,
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

export interface BackgroundProps {
    conditions: string | undefined;
    hour: number;
}
