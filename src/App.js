import React, { Component } from 'react';
import './App.css';
import StatsBar from './components/StatsBar';
import ButtonFunctionality from './components/ButtonFunctionality';
import Visualization from './components/Visualization';
import { Button, Input, Divider } from 'semantic-ui-react';



/*
@func: APP COMPONENT TIES TOGETHER ALL OTHER COMPONENTS AND LOGIC
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      insidePts: 0,
      totalPts: 0,
      pi: 0,
      cleared: ''
    }
  }

  /*
  @func: MONTE CARLO APPROXIMATION OF PI
  @info: PI = 4 * (# OF POINTS INSIDE CIRCLE / TOTAL # OF POINTS)
  */
  approxPi = () => {
    const r = 1;
    let x = Math.random();
    let y = Math.random();
    let _insidePts = this.state.insidePts;
    let _totalPts = this.state.totalPts;

    if ((Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))) < r){
      _insidePts++;
      this.setState({
        insidePts: _insidePts
      })
    }

    _totalPts++;

    this.setState({
      x,
      y,
      totalPts: _totalPts,
      pi: 4*(_insidePts/_totalPts),
      cleared: false
    })
  }

  /*
  @func: RESETTING VALUES
  */
  resetValues = () => {
    return this.setState({
      insidePts: 0,
      totalPts: 0,
      pi: 0,
      cleared: true
    })
  }

  /*
  @func: RENDER REACT APP
  */
  render() {
    return (
        <div className="App">

          <StatsBar 
          insidePts={this.state.insidePts} 
          totalPts={this.state.totalPts} 
          pi={this.state.pi} />
          <br />

          <ButtonFunctionality 
          approxPi={this.approxPi}
          reset={this.resetValues}
          insidePts={this.state.insidePts} 
          totalPts={this.state.totalPts}
          cleared={this.state.cleared} 
          />

          <Visualization width={200} height={200} 
          x={this.state.x} 
          y={this.state.y} 
          insidePts={this.state.insidePts} 
          totalPts={this.state.totalPts} 
          pi={this.state.pi}
          cleared={this.state.cleared}
          />

        </div>
    );
  }
}

export default App;