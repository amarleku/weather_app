import React from 'react';
import './App.css';
import NightScreen from './screens/NightScreen';
import SunnyScreen from './screens/SunnyScreen';
import {  Route, Routes  } from "react-router-dom";
import Favorites from './screens/Favorites';
import { Sun } from './styles/images';

function App() {
  return (
    <div className="App">
      {/* <SunnyScreen />*/}
      <SunnyScreen></SunnyScreen>
    </div>
  );
}

export default App;
