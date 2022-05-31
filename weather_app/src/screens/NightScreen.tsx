import React, {useState} from "react";
import Search from "../components/SearchBar/Search";

import { ResponseData } from "../components/SearchBar/constants";
import axios from "axios";


const NightScreen: React.FC = () => {

    const [initialData, setInitialData] = useState<ResponseData>({
        name: '',
        days: [
            {
                temp: '',
                description: '',
                humidity: '',
                windSpeed: ''
            }
        ],
        errorMsg: ''
    });
    return (
        <div>
            <h1>Night Screen</h1>
        </div>
    );
};

export default NightScreen;

