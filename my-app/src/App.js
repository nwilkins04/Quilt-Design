import React, { Component } from 'react';
import { Stage, Layer, Rect, } from "react-konva";

import './App.css';

import Title from "./components/Header/Title.js";
import Colors from "./components/colors/colors.js";
import Refresh from "./components/Header/Refresh";
import Save from "./components/Header/Save";
import Delete from "./components/Header/Delete";

import Square from "./components/shapes/square";
import Triangle from "./components/shapes/triangle";
import Triangle2 from "./components/shapes/triangle2";
import Hexagon from "./components/shapes/hexagon";
import Hexagon2 from "./components/shapes/hexagon2";
import Hexagon3 from "./components/shapes/hexagon3";
import Hexagon4 from "./components/shapes/hexagon4";
import Rectangle from "./components/shapes/rectangle";
import Rectangle2 from './components/shapes/reactangle2';
import Rectangle3 from "./components/shapes/rectangle3";
import Diamond from "./components/shapes/diamond";

const random = num => Math.floor(Math.random() * num) + 1;

const newRectangle = () => ({
  x: random(250),
  y: random(300),
  width: 50,
  height: 100
});

class App extends Component {
  state = {
    isDragging: false,
    canvas: [
      {
        x: 150,
        y: 25,
        width: 50,
        height: 100
      }
    ],
    fill: ["lightgrey", "red", "orange", "yellow", "green", "blue", "purple", "brown", "black", "white"],
  };

  handleClick = () => {
    this.setState(prevState => ({
      canvas: [...prevState.canvas, { ...newRectangle() }]
    }));
  };

  handleDragStart = e => {
    e.target.setAttrs({
      scaleX: 1,
      scaleY: 1,
    });
  };

  handleDragEnd = e => {
    e.target.to({
      scaleX: 1,
      scaleY: 1,
    });
    console.log(window.innerWidth,e)
    if(window.innerWidth){
      console.log(this.state.canvas.x)
    }
  };

  colorChange = () => {
    let newIndex = (this.state.colorIndex + 1) % this.state.fill.length
    this.setState({ colorIndex: newIndex})
  };

  render() {
    return (
      <div className="App">
        <Title/> 
        <Delete/>
        <Save/>
        <Refresh/>
          <div className="container">
              <div className="ShapeDisplay">
                <h2>Shapes</h2>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                  <Layer>
                  {this.state.canvas.map(({ height, width, x, y }, key) => (
                    <Rect
                      key={key}
                      x={x}
                      y={y}
                      width={width}
                      height={height}
                      stroke="black"
                      draggable
                      fill="black"
                      onDragStart={this.handleDragStart}
                      onDragEnd={this.handleDragEnd}
                      onClick={(this.handleClick)}
                      // onClick=if x>700{
                      //   then (OnClick={(this.colorChange)})
                      //   else OnClick={(this.handleClick)}
                      // }
                    />
                  ))}
                    <Rectangle/>
                    <Rectangle2/>
                    <Rectangle3/>
                    <Square/>
                    <Triangle/>
                    <Triangle2/>
                    <Diamond/>
                    <Hexagon/>
                    <Hexagon2/>
                    <Hexagon3/>
                    <Hexagon4/>
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
  };
};

export default App;
