import React, { Component } from 'react';
import { Stage, Layer, } from "react-konva";

import './App.css';

import Colors from "./components/colors/colors.js";
import Rectangle from "./components/shapes/rectangle";
import Square from "./components/shapes/square";
import Triangle from "./components/shapes/triangle";
import Hexagon from "./components/shapes/hexagon";

class App extends Component {
  state = {
    isDragging: false,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"> Design Your Quilt</header>
          <div className="container">
              <div className="ShapeDisplay">Shapes
                <Stage width={window.innerWidth} height={window.innerHeight}>
                  <Layer>
                    <Rectangle/>
                    <Square/>
                    <Triangle/>
                    <Hexagon/>
                </Layer>
                </Stage>
              </div>
              <div className="QuiltDisplay">Place Shapes Here to Make Your Quilt</div>
              <div className="ColorDisplay">
                  <Colors/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
