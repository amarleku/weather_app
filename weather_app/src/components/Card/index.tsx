import React from "react";
import { CardCompType } from "./constants";

const CardComponent = ({ weatherDetails }: CardCompType) => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="inputWrapper">
              <input
                type="text"
                className="form-control searchInput"
                placeholder="Search"
              />
            </div>
            <div className="infoWrapper">
              <div className="stats">
                {/* here will be {weatherDetails.location} */}
                <h2>Tirana, Albania</h2>
                <h3>13°C</h3>
                <h3>Sunny</h3>
              </div>
              <div className="otherStats">
                <h3>Humidity: 40%</h3>
                <h3>Wind Speed: 13km/h</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
