import React from "react";
// Import SVG Logo
import sunSVG  from '../../assets/sun.svg';
import moonSVG from '../../assets/moon.svg';

const MainComponent:React.FC = () => {
    return(
        <div className="background">
            <div className="weatherLogo">
                {/* <img src={sunSVG} alt="Sun SVG" className="sunSVG" /> */}
                <img src={moonSVG} alt="Moon SVG" className="moonSVG" />
            </div>
        </div>
    );
}

export default MainComponent;

