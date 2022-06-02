import React, { useEffect, useState } from "react";
// Import SVG Logo
import sunSVG  from '../../assets/sun.svg';
import moonSVG from '../../assets/moon.svg';
import snowSVG from '../../assets/snow.svg';
import rainSVG from '../../assets/rain.svg';

// Import Props Interface
import { BackgroundProps } from "./constants";

const MainComponent:React.FC<BackgroundProps> = ({ conditions, hour }) => {
    useEffect(() => {
        console.log(hour);
    })
    return(
        <>
            <div className={conditions?.toLowerCase().includes('clear') ? "backgroundClear" : "backgroundDark"}>
                <div className="weatherLogo">
                    {conditions?.toLowerCase().includes('clear') ? <img src={sunSVG} alt="Sun SVG" className="sunSVG" />
                    : <img src={rainSVG} alt="Sun SVG" className="sunSVG" /> }
                    {/* {conditions.toLowerCase().search('cloud') ? <img src={rainSVG} alt="Sun SVG" className="sunSVG" />
                    : ''} */}
                    {/* <img src={sunSVG} alt="Sun SVG" className="sunSVG" /> */}
                    {/* <img src={moonSVG} alt="Moon SVG" className="moonSVG" /> */}
                    {/*<img src={snowSVG} alt="Moon SVG" className="moonSVG" />*/}
                    {/* <img src={rainSVG} alt="Rain SVG" className="rainSVG" /> */}
                </div>
            </div>
            
            <div className={hour?.valueOf() > 15 ? "backgroundNight" : "backgroundDark"}>
                <div className="weatherLogo">
                    {conditions?.toLowerCase().includes('clear') ? <img src={moonSVG} alt="Sun SVG" className="sunSVG" />
                    : <img src={rainSVG} alt="Sun SVG" className="sunSVG" /> }
                    {/* <img src={sunSVG} alt="Sun SVG" className="sunSVG" /> */}
                    {/* <img src={moonSVG} alt="Moon SVG" className="moonSVG" /> */}
                    {/*<img src={snowSVG} alt="Moon SVG" className="moonSVG" />*/}
                    {/* <img src={rainSVG} alt="Rain SVG" className="rainSVG" /> */}
                </div>
            </div>
        </>
        
    );
}

export default MainComponent;
