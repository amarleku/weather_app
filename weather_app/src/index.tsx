import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './screens/styles/sunnyScreen.css';
import './screens/styles/nightScreen.css';
import './screens/styles/favoriteScreen.css'
import './components/styles/BackgroundComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationsContextProvider from "./store/location-context.";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <LocationsContextProvider>
  <React.StrictMode>
      <App />
  </React.StrictMode>
    </LocationsContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
