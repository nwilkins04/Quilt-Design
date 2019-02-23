import React, {Component} from "react";
import {Stage, Layer} from "react-konva";

import Rectangle from "./components/shapes/rectangle";
import Rectangle2 from "./components/shapes/reactangle2";
import Square from "./components/shapes/square";
import Diamond from "./components/shapes/diamond";
import Hexagon from "./components/shapes/hexagon";
import Hexagon2 from "./components/shapes/hexagon2";
import Hexagon3 from "./components/shapes/hexagon3";
import Hexagon4 from "./components/shapes/hexagon4";
import Hexagon5 from "./components/shapes/hexagon5";
import Triangle from "./components/shapes/triangle";
import Triangle2 from "./components/shapes/triangle2";
import "./App.css";
import Delete from "./components/Header/Delete";
import Refresh from "./components/Header/Refresh";
import Title from "./components/Header/Title";
import Save from "./components/Header/Save";
import Colors from "./components/colors/colors";

const ComponentMap = {'rectangle': Rectangle, 'rectangle2': Rectangle2, 'square':Square, 'diamond':Diamond, 'hexagon':Hexagon, 'hexagon2':Hexagon2, 'hexagon3':Hexagon3, 'hexagon4':Hexagon4, 'hexagon5':Hexagon5,'triangle': Triangle, 'triangle2': Triangle2}

const colors = ["lightgrey", "red", "orange", "yellow", "green", "blue", "purple", "brown", "black", "white"]

const defaultShapes ={
  "Rectangle": {shape: 'rectangle', props: {x:325, y:25, stroke:'black', width: 50, height:100, colorIndex: 0}},
  "Rectangle2": {shape: 'rectangle2', props: {x:75, y:25, stroke: 'black', width: 100, height: 50, colorIndex: 0}},
  "Square": {shape: 'square', props: {x: 250, y:50, stroke: 'black', width: 50, height: 50, colorIndex: 0}},
  "Diamond": {shape: 'diamond', props: {x:350, y:200, stroke: 'black', points: [0, 5, 25, 40, 2, 80, 0, 85, -25, 40], colorIndex: 0}},
  "Hexagon": {shape: 'hexagon', props: {x:30, y:250, stroke: 'black', points: [0, -5, 50, -5, 75, 40, 50, 85, 0, 85, -25, 40], colorIndex: 0}},
  "Hexagon2": {shape: 'hexagon2', props: {x: 140, y:250, stroke: 'black', points: [0, -5, 50, -5, 75, 40, 50, 85], colorIndex: 0}},
  "Hexagon3": {shape: 'hexagon3', props: {x: 250, y:250, stroke: 'black', points: [75, 40, 50, 85, 0, 85, -25, 40], colorIndex: 0}},
  "Hexagon4": {shape: 'hexagon4', props: {x:130, y:100, stroke: 'black', points: [0, -5, 50, -5,  75, 40, 50, 40, -25, 40], colorIndex: 0}},
  "Hexagon5": {shape: 'hexagon5', props: {x:200, y:150, stroke: 'black', points: [23, 80, -1, 35, 25, -10, 73, -10], colorIndex: 0}},
  "Triangle": {shape: 'triangle', props: {x: 10, y: 125, stroke: 'black', points: [55, 50, 10, 50, 55, 100], colorIndex: 0}},
  "Triangle2": {shape: 'triangle2', props: {x:70, y:125, stroke: 'black', points: [10, 100, 10, 50, 55, 100], colorIndex: 0}}
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
      {shape: 'rectangle2', props:{x:75, y:25, stroke:'black', width:100, height:50, colorIndex: 0, shapeIndex: 1}},
      {shape: 'square', props: {x: 250, y: 50, stroke: 'black', width: 50, height: 50, colorIndex: 0, shapeIndex: 2}},
      {shape: 'diamond', props: {x:350, y:200, stroke: 'black', points: [0, 5, 25, 40, 2, 80, 0, 85, -25, 40], colorIndex: 0, shapeIndex: 3}},
      {shape: 'hexagon', props: {x: 30, y:250, stroke: 'black', points: [0, -5, 50, -5, 75, 40, 50, 85, 0, 85, -25, 40], colorIndex: 0, shapeIndex: 4}},
      {shape: 'hexagon2', props: {x: 140, y: 250, stroke: 'black', points: [0, -5, 50, -5, 75, 40, 50, 85], colorIndex: 1, shapeIndex: 5}},
      {shape: 'hexagon3', props: {x: 250, y: 250, stroke: 'black', points: [75, 40, 50, 85, 0, 85, -25, 40], colorIndex: 2, shapeIndex: 6}},
      {shape: 'hexagon4', props: {x:130, y:100, stroke:'black', points: [0, -5, 50, -5, 75, 40, 50, 40, -25, 40], colorIndex: 3, shapeIndex: 7}},
      {shape: 'hexagon5', props: {x:200, y:150, stroke: 'black', points:[23, 80, -1, 35, 25, -10, 73, -10], colorIndex: 0, shapeIndex:8}},
      {shape: 'triangle', props: {x: 10, y: 125, stroke: 'black', points: [55, 50, 10, 50, 55, 100], colorIndex: 0, shapeIndex: 9}},
      {shape: 'triangle2', props: {x: 70, y: 125, stroke: 'black', points: [10, 100, 10, 50, 55, 100], colorIndex: 0, shapeIndex: 10}}
    ],
    shapeCounter: 11
  }

  addShape = (event) => {
    let newElement
    let currentShapeCounter = this.state.shapeCounter

    console.log('shape class name: ', event.target.attrs.className)
    switch(event.target.attrs.className) {
      case("TallRectangle"):
      newElement = defaultShapes.Rectangle
      break;
      case("Rectangle2"):
      newElement = defaultShapes.Rectangle2
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
      case("Hexagon2"):
      newElement = defaultShapes.Hexagon2
      break;
      case("Hexagon3"):
      newElement = defaultShapes.Hexagon3
      break;
      case("Hexagon4"):
      newElement = defaultShapes.Hexagon4
      break;
      case("Hexagon5"):
      newElement = defaultShapes.Hexagon5
      break;
      case("Triangle"):
      newElement = defaultShapes.Triangle
      break;
      case("Triangle2"):
      newElement = defaultShapes.Triangle2
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