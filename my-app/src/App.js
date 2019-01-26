import React, { Component } from 'react';

import { Stage, Layer, Rect, Line, } from "react-konva";

import {CirclePicker } from 'react-color';

import './App.css';
// import Shapes from "./components/shapes/shapes.js";
// import Colors from "./components/colors/colors.js";


class App extends Component {
  state = {
    isDragging: false,
    background: '#fff',
  };

  handleChange(color, event) {
    color ={
      hex: '#333',
      rgb: {
        r: 51,
        g: 51,
        b: 51,
        a: 1,
      },
      hsl: {
        h: 0,
        s: 0,
        l: .20,
        a: 1,
      },
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"> Design Your Quilt</header>
          <div className="container">
              <div className="ColorDisplay">Colors?
                {/* <Colors/> */}
                <CirclePicker onChange={ this.handleChange}/>
              </div>
              <div className="QuiltDisplay">Hopefully quilt shows up here
              </div>
              <div className="ShapeDisplay">Shapes?
                {/* <Shapes/> */}
                <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                <Rect
                    x={20}
                    y={25}
                    width={200}
                    height={50}
                    stroke="black"
                    draggable
                    onDragStart={() => {
                        this.setState({
                            isDragging: true
                        });
                    }}
                    onDragEnd={() => {
                        this.setState({
                            isDragging: false
                        });
                    }} 
                />
                <Rect
                    x={20}
                    y={100}
                    width={50}
                    height={50}
                    stroke="black"
                    onDragStart={() => {
                      this.setState({
                          isDragging: true
                      });
                    }}
                    onDragEnd={() => {
                      this.setState({
                          isDragging: false
                      });
                    }} 
                />
                <Line
                    x={10}
                    y={125}
                    points={[55, 50, 10, 50, 55, 100]}
                    closed
                    stroke="black"
                    onDragStart={() => {
                      this.setState({
                          isDragging: true
                      });
                    }}
                    onDragEnd={() => {
                      this.setState({
                          isDragging: false
                      });
                    }} 
                />
                <Line
                  x={30}
                  y={250}
                  points={[0, -5, 50, -5, 75, 40, 50, 85, 0, 85, -25, 40,]}
                  stroke="black"
                  closed
                  onDragStart={() => {
                    this.setState({
                        isDragging: true
                    });
                  }}
                  onDragEnd={() => {
                    this.setState({
                        isDragging: false
                    });
                  }} 
                />
            </Layer>
                </Stage>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
