import React from 'react';
import './App.css';
import FavoritesScreen from './screens/FavoritesScreen';
import NightScreen from './screens/NightScreen';
import SunnyScreen from './screens/SunnyScreen';
import {  Route, Routes  } from "react-router-dom";
import Favorites from './screens/Favorites';
import { Sun } from './styles/images';
import Footer from './screens/Footer';

function App() {
  return (
    
    <div className="App">
      <SunnyScreen />
      {/* <FavoritesScreen /> */}
      {/*<NightScreen /> */}
      {/*Test Push*/}
      </div>
  );
}

export default App;
