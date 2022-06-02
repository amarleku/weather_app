import React from 'react';
import './App.css';
import NightScreen from './screens/NightScreen';
import SunnyScreen from './screens/SunnyScreen';
import {  Route, Routes  } from "react-router-dom";
import Favorites from './screens/Favorites';
import { Sun } from './styles/images';
import Footer from './screens/Footer';

function App() {
  return (
    
    <div className="App">
      {/**/}<SunnyScreen />
      {/*<NightScreen /> */}
      {/*Test Push*/}<div>
      <Footer />
    </div></div>
  );
}

export default App;
