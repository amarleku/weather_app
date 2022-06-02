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
        console.log(hour.valueOf());
        if(conditions?.toLowerCase().includes('clear')){
            console.log(conditions);
        }
    })
    return(
        <>
            {conditions?.toLowerCase().includes('clear') && hour?.valueOf() < 18 ? <div className={'backgroundClear'}>
                <div className={'weatherLogo'}>
                    <img src={sunSVG} alt={"Sun Icon"} className={'sunSVG'} />
                </div>
            </div> : <div className={'backgroundDark'}>
                <div className={'weatherLogo'}>
                    <img src={rainSVG} alt={"Sun Icon"} className={'sunSVG'} />
                </div>
            </div>}

            {conditions?.toLowerCase().includes('cloudy') && hour?.valueOf() > 18 ? <div className={'backgroundNight'}>
                <div className={'weatherLogo'}>
                    <img src={rainSVG} alt={"Sun Icon"} className={'sunSVG'} />
                </div>
            </div> : conditions?.toLowerCase().includes('cloudy') && hour?.valueOf() < 18 && <div className={'backgroundDark'}>
                <div className={'weatherLogo'}>
                    <img src={rainSVG} alt={"Sun Icon"} className={'sunSVG'} />
                </div>
            </div>}
        </>
    );
}

export default MainComponent;
