import React from "react";
import sunny from '../assets/sun.svg'

const SunnyScreen = () => {
    return(
        <div className="background">
            <div className="weatherLogo">
                <img src={sunny} alt="sunnyLogo" className="sunImg" />
          </div>
          <div className="container">

                <div className="card custom-card">
                    <div className="card-body">
                        <div className="inputWrapper">
                            <input type="text" className="form-control searchInput" placeholder="Search" />
                        </div>
                        <div className="infoWrapper">
                            <div className="stats">
                                <h2>Tirana, Albania</h2>
                                <h3>13°C</h3>
                                <h3>Sunny</h3>
                            </div>
                            <div className="otherStats pt-5 pb-3">
                                <h3>Humidity: 40%</h3>
                                <h3>Wind Speed: 13km/h</h3>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

        </div>
    );
}

export default SunnyScreen;
