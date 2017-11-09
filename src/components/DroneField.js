import React from 'react';

import dron from '../style/dron.svg';
import Panel from './Panel';

export default class DroneField extends React.Component {

  constructor() {
    super();

   this.state = {
      x: 50,
      y: 50,
      fuel: 100
    };

    this.onKeydown = this.onKeydown.bind(this);
    this.move = this.move.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown);
  }

  move(direction) {
    if (this.state.fuel === 0) {
      alert('There is no fuel');
      this.setState( {
           x: 50,
           y: 50,
           fuel: 100         
      })
      return;
    }
    if ((direction === 'up') && (this.state.y > 15) ) {
      this.setState((prevState) => ({ y: prevState.y - 1 }));
    } else if ((direction === 'down') && (this.state.y < 90) ) {
      this.setState((prevState) => ({ y: prevState.y + 1 }));
    } else if ((direction === 'left') && (this.state.x > 0) ) {
      this.setState((prevState) => ({ x: prevState.x - 1 }));
    } else if ((direction === 'right') && (this.state.x < 96) ) {
    this.setState((prevState) => ({ x: prevState.x + 1 }));
    }
    this.setState((prevState) => ({ fuel: prevState.fuel - 1 }));
  }

  onKeydown(e) {
    switch (e.key) {
      case 'ArrowUp':
        this.move('up');
        break;
      case 'ArrowDown':
        this.move('down');
        break;
      case 'ArrowLeft':
        this.move('left');
        break;
      case 'ArrowRight':
        this.move('right');
        break;
    }
  }

  render() {
    const droneStyle = {
      top: `${this.state.y}%`,
      left: `${this.state.x}%`
    };
    return(
      <div>
        <img src={dron} style={droneStyle} className="dron" alt="dron" />
      <Panel
        x={this.state.x}
        y={this.state.y}
        fuel={this.state.fuel}
      />
      </div>
    )
  }
}
