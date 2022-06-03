import axios from "axios";
import React, { useEffect, useState } from "react";

import BackgroundComponent from "../components/BackgroundComponent";
import { ResponseData } from "../components/SearchBar/constants";
import Search from "../components/SearchBar/Search";
import * as Url from "../constants/url";
import { replacePlaceholders } from "../utils/urlUtils";
import { calculateImageLogo } from "./constants";

const { REACT_APP_API_KEY } = process.env;

const WeatherScreen: React.FC = () => {
  const [location, setLocation] = useState<string>("");

  const url = replacePlaceholders(Url.GET_WEATHER_URL, {
    location,
    apiKey: REACT_APP_API_KEY,
  });

  const defaultURL = replacePlaceholders(Url.GET_WEATHER_URL, {
    location: "Tirana",
    apiKey: REACT_APP_API_KEY,
  });

  useEffect(() => {
    axios.get(defaultURL).then((response: any) => {
      setData(response.data);
    });
  }, []);

  const [data, setData] = useState<ResponseData>({
    address: "",
    days: [
      {
        conditions: "",
        datetime: "",
        datetimeEpoch: 0,
        temp: "",
        tempmax: "",
        description: "",
        humidity: "",
        windspeed: "",
        feelslikemax: "",
      },
    ],
    errorMsg: "",
  });

  const [errorMsg, setErrorMsg] = useState<string>("");

  const currentTime = new Date().getHours();

  const searchLocation = (event: { key: string }) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response: any) => {
          console.log(response.data);
          setData(response.data);
          setErrorMsg("");
        })
        .catch((error) => {
          if (location === "") {
            setErrorMsg("Please enter a location on the search bar!");
          } else {
            setErrorMsg(error.response.data);
          }
          console.log(error);
        });
    }
  };

  return (
    <>
      <BackgroundComponent
        conditions={data.days[0].conditions}
        hour={currentTime}
      />
      <div className="container">
        <div className="card custom-card">
          <div className="card-body">
            <div className="inputWrapper">
              <Search
                searchLocation={(event) => searchLocation(event)}
                handleInputChange={(event) => setLocation(event.target.value)}
              />
            </div>
            <div className="infoWrapper">
              {errorMsg === "" ? (
                data.days.slice(0, 5).map((item, index) => (
                  <div className="stats" key={index}>
                    <h3 className="date-header">{item.datetime}</h3>
                    <h4 className="pt-4">{data.address}</h4>
                    <h4>
                      {" "}
                      <b>
                        <i>{item.tempmax}°C</i>
                      </b>
                      <img
                        src={calculateImageLogo(item, currentTime)}
                        className={"small-icon"}
                        alt={"Small Icon"}
                      />
                    </h4>
                    <h5>{item.description}</h5>
                    <h5 className="pt-4">Humidity: {item.humidity}%</h5>
                    <h5>Wind Speed: {item.windspeed}</h5>
                    <h5>
                      <b>
                        <i>Feels Like: {item.feelslikemax}°C</i>
                      </b>
                    </h5>
                  </div>
                ))
              ) : (
                <div>
                  <h2>{errorMsg}</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherScreen;
