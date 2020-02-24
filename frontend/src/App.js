import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

import Routes from './routes';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCeC"/>

      <div className="content">
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
