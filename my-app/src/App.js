import React, { Component } from 'react';
import { Stage, Layer, } from "react-konva";

import './App.css';

import Colors from "./components/colors/colors.js";
import Rectangle from "./components/shapes/rectangle";
import Square from "./components/shapes/square";
import Triangle from "./components/shapes/triangle";
import Hexagon from "./components/shapes/hexagon";
import Hexagon2 from "./components/shapes/hexagon2";
import Hexagon3 from "./components/shapes/hexagon3";
import Rectangle2 from './components/shapes/reactangle2';

class App extends Component {
  state = {
    isDragging: false,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"> Design Your Quilt</header>
          <div className="container">
              <div className="ShapeDisplay">
                <h2>Shapes</h2>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                  <Layer>
                    <Rectangle/>
                    <Rectangle2/>
                    <Square/>
                    <Triangle/>
                    <Hexagon/>
                    <Hexagon2/>
                    <Hexagon3/>
                </Layer>
                </Stage>
              </div>
              <div className="QuiltDisplay">
                <h2>Place Shapes Here to Make Your Quilt</h2>
              </div>
              <div className="ColorDisplay">
                  <Colors/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
