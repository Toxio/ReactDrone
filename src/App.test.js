import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import DroneField from './components/DroneField';
import Panel from './components/Panel';

describe("Tests for all components", () => {
  const div = document.createElement('div');

  it('App render correctly', () => {  
    ReactDOM.render(<App />, div);
  });

  it('DroneField component render correctly', () => {
    ReactDOM.render(<DroneField />, div);
  });

  it('Panel component render correctly', () => {
    ReactDOM.render(<Panel
      x={50}
      y={50}
      fuel={100}
    />, div);
  });

});
