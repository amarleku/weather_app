import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App: React.FC = () => {
  
  useEffect(() => {
      getRequest();
  }, []) 

  const getRequest = () => {
    axios.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tirana?unitGroup=metric&include=days&key=T8F4NJ3HKJVN9BQNVJLVMSGJE&contentType=json')
      .then((response) => {
        console.log(response.data);
      })
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
