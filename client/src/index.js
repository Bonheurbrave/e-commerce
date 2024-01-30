import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Auth0Provider} from '@auth0/auth0-react'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
    <Auth0Provider
    domain="dev-2ubkr7rwa30plhp2.us.auth0.com"
    clientId="vF3vTa8eJ5EHSzoBZtsWaRrjUrXTLuMX"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
