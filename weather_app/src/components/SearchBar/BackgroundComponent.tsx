import React from "react";
// Import SVG Logo
import sunSVG  from '../../assets/sun.svg';
import moonSVG from '../../assets/moon.svg';
import snowSVG from '../../assets/snow.svg';

const MainComponent:React.FC = () => {
    return(
        <div className="background">
            <div className="weatherLogo">
                {/* <img src={sunSVG} alt="Sun SVG" className="sunSVG" /> */}
                {/* <img src={moonSVG} alt="Moon SVG" className="moonSVG" /> */}
                <img src={snowSVG} alt="Moon SVG" className="moonSVG" />
            </div>
        </div>
    );
}

export default MainComponent;

