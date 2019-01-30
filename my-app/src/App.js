import React, { Component } from 'react';
import { Stage, Layer, Rect, Line, } from "react-konva";

import './App.css';
// import Shapes from "./components/shapes/shapes.js";
// import Triangle from './components/shapes/shapes.js';
import Colors from "./components/colors/colors.js";

import Rectangle from "./components/shapes/rectangle";

class App extends Component {
  state = {
    isDragging: false,
  };

  // for color change here:
  // handleClick = () => {
  //   this.setState({ displayColorPicker: !this.state.displayColorPicker })
  // };

  // handleClose = () => {
  //   this.setState({ displayColorPicker : false})
  // };

  // handleChange = (color) => {
  //   this.setState({ color: color.rgb })
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header"> Design Your Quilt</header>
          <div className="container">
              <div className="ShapeDisplay">Shapes?
                <Stage width={window.innerWidth} height={window.innerHeight}>
                  <Layer>
                  <Rectangle/>
                <Rect
                    x={20}
                    y={100}
                    width={50}
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
                <Line
                    x={10}
                    y={125}
                    points={[55, 50, 10, 50, 55, 100]}
                    closed
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
                <Line
                  x={30}
                  y={250}
                  points={[0, -5, 50, -5, 75, 40, 50, 85, 0, 85, -25, 40,]}
                  stroke="black"
                  closed
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
                </Layer>
                </Stage>
              </div>
              <div className="QuiltDisplay">Place Shapes Here</div>
              <div className="ColorDisplay">
                  <Colors/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
