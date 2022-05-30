import React from "react";

import '../assets/sun.png';

const SunnyScreen = () => {
    return(
        <div className="background">
            <div className="weatherLogo">
                <img src={require('../assets/sun.png')} alt="sunnyLogo" className="sunImg" />
            </div>
            <div className="container">
                <div className="card">
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
}

export default SunnyScreen;
