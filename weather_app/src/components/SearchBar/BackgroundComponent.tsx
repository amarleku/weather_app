import React from "react";

// Import SVG Logo
import sunSVG  from '../../assets/sun.svg';

const MainComponent:React.FC = () => {
    return(
        <div className="background">
            <div className="weatherLogo">
                <img src={sunSVG} alt="Sun SVG" className="sunSVG" />
            </div>
        </div>
    );
}

export default MainComponent;

