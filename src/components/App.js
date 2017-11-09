import React, { Component } from 'react';
import logo from '../style/logo.svg';
import '../style/App.css';

import DroneField from './DroneField';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to powered drone!</h1>
        </header>
        <DroneField />
      </div>
    );
  }
}

export default App;
