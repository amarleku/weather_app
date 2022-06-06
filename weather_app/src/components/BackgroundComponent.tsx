import React from "react";
// Import SVG Logo
import sunSVG  from '../assets/sun.svg';
import moonSVG from '../assets/moon.svg';
import rainSVG from '../assets/rain.svg';

import Footer from "../screens/Footer";

// Import Props Interface
import { BackgroundProps } from "./SearchBar/constants";

const MainComponent:React.FC<BackgroundProps> = ({ conditions, hour }) => {
    return(
        <>
            {conditions?.toLowerCase().includes('clear') && hour?.valueOf() < 18 ? 
            <> 
                <div className={'backgroundClear'}></div>
                <div className={'weatherLogo'}>
                    <img src={sunSVG} alt={"Sun Icon"} className={'sunSVG'} />
                </div> 
            </> 
                : 
            <> 
                <div className={'backgroundNight'}></div>
                <div className={'weatherLogo'}>
                    <img src={moonSVG} alt={"Sun Icon"} className={'sunSVG'} />
                </div> 
            </>
            }

            {conditions?.toLowerCase().includes('clear') && hour?.valueOf() > 18 ? 
            <> 
                <div className={'backgroundNight'}></div>
                <div className={'weatherLogo'}>
                    <img src={moonSVG} alt={"Sun Icon"} className={'sunSVG'} />
                </div>
            </> 
                : 
            conditions?.toLowerCase().includes('cloudy') && hour?.valueOf() < 18 &&
            <>
                <div className={'backgroundDark'}></div>
                <div className={'weatherLogo'}>
                    <img src={rainSVG} alt={"Sun Icon"} className={'sunSVGg'} />
                </div>
            </>
            }
            <Footer />
        </>
    );
}

export default MainComponent;
