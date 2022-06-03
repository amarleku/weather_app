import React from 'react';
import './App.css';
import FavoritesScreen from './screens/FavoritesScreen';
import NightScreen from './screens/NightScreen';
import SunnyScreen from './screens/SunnyScreen';

function App() {
  return (
    <div className="App">
      <SunnyScreen />
      {/* <FavoritesScreen /> */}
      {/*<NightScreen /> */}
    </div>
  );
}

export default App;
