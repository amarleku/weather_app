import React from 'react';
import './App.css';
import NightScreen from './screens/NightScreen';
import SunnyScreen from './screens/SunnyScreen';

function App() {
  return (
    <div className="App">
      <SunnyScreen />
      {/*<NightScreen /> */}
    </div>
  );
}

export default App;
