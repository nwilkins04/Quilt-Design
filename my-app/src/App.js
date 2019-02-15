import React, {Component} from "react";
import {Stage, Layer} from "react-konva";

import Rectangle from "./components/shapes/rectangle";
import Square from "./components/shapes/square";
import Diamond from "./components/shapes/diamond";
import Hexagon from "./components/shapes/hexagon";
import "./App.css";
import Delete from "./components/Header/Delete";
import Refresh from "./components/Header/Refresh";
import Title from "./components/Header/Title";
import Save from "./components/Header/Save";
import Colors from "./components/colors/colors";

const ComponentMap = {'rectangle': Rectangle, 'square':Square, 'diamond':Diamond, 'hexagon':Hexagon}

const colors = ["lightgrey", "red", "orange", "yellow", "green", "blue", "purple", "brown", "black", "white"]

const defaultShapes ={
  "Rect": {shape: 'rectangle', props: {x:325, y:25, stroke:'black', width: 50, height:100, colorIndex: 0}},
  "Square": {shape: 'square', props: {x: 250, y:50, stroke: 'black', width: 50, height: 50, colorIndex: 0}},
  "Diamond": {shape: 'diamond', props: {x:350, y:200, stroke: 'black', points: [0, 5, 25, 40, 2, 80, 0, 85, -25, 40], colorIndex: 0}},
  "Hexagon": {shape: 'hexagon', props: {x:30, y:250, stroke: 'black', points: [0, -5, 50, -5, 75, 40, 50, 85, 0, 85, -25, 40], colorIndex: 0}}
}

const random = num => Math.floor(Math.random() * num) + 1;

const newShape = () => ({
  x: random(250),
  y: random(300),
  fill: 'lightgrey'
});

class App extends Component {
  state = {
    myShapes: [
      {shape: 'rectangle', props: {x: 325, y:25, stroke:'black', width:50, height:100, colorIndex: 0, shapeIndex: 0}},
      {shape: 'square', props: {x: 250, y: 50, stroke: 'black', width: 50, height: 50, colorIndex: 0, shapeIndex: 1}},
      {shape: 'diamond', props: {x:350, y:200, stroke: 'black', points: [0, 5, 25, 40, 2, 80, 0, 85, -25, 40], colorIndex: 0, shapeIndex: 2}},
      {shape: 'hexagon', props: {x: 30, y:250, stroke: 'black', points:[0, -5, 50, -5, 75, 40, 50, 85, 0, 85, -25, 40], colorIndex: 0, shapeIndex: 3}}
    ],
    shapeCounter: 4
  }

  addShape = (event) => {
    let newElement = defaultShapes.Hexagon
    let currentShapeCounter = this.state.shapeCounter

    switch(event.target.className) {
      case("Rect"):
      newElement = defaultShapes.Rect
      break;
      case("Square"):
      newElement = defaultShapes.Square
      break;
      case("Diamond"):
      newElement = defaultShapes.Diamond
      break;
      case("Hexagon"):
      newElement = defaultShapes.Hexagon
      break;
    default:
      console.log("not a recognized shape")
  }
  newElement.props.shapeIndex = currentShapeCounter
  console.log("adding shape")
  //append a single item
  this.setState({
    myShapes: [...this.state.myShapes, newElement],
    shapeCounter: currentShapeCounter++
  }, () => {
  });
}

changeColor = (event) => {
  console.log(event)
  let idx = event.target.colorIndex
  let newShapes = this.state.myShapes
  newShapes[idx].props.colorIndex[0] = (colors.indexOf(event.target.attrs.fill) + 1) % colors.length
  this.setState({
    myShapes: newShapes
  }, () => {
    console.log("changing color")
  })
}

handleClick = () => {
  this.setState(prevState => ({
    canvas: [...prevState.canvas, { ...newShape() }]
  }));
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
        <Stage
          width={1450}
          height={700}
        >
          <Layer>
            {this.state.myShapes.map((shape, idx) => {
              const Component = ComponentMap[shape.shape]
              return(
                <Component
                  colors={colors}
                  key={idx}
                  shapeIndex={idx}
                  {...shape.props}
                  handleDragEnd={this.addShape}
                  changeColor={() => this.changeColor}
                />
              )
            })}
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
  )
}
}

export default App;