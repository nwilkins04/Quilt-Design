import React, { Component } from 'react';
import { Stage, Layer, Rect } from "react-konva";

import './App.css';

import Title from "./components/Header/Title.js";
import Colors from "./components/colors/colors.js";
import Refresh from "./components/Header/Refresh";
import Save from "./components/Header/Save";
import Delete from "./components/Header/Delete";

// import Square from "./components/shapes/square";
// import Triangle from "./components/shapes/triangle";
// import Triangle2 from "./components/shapes/triangle2";
// import Hexagon from "./components/shapes/hexagon";
// import Hexagon2 from "./components/shapes/hexagon2";
// import Hexagon3 from "./components/shapes/hexagon3";
// import Hexagon4 from "./components/shapes/hexagon4";
import Rectangle from "./components/shapes/rectangle";
// import Rectangle2 from './components/shapes/reactangle2';
// import Rectangle3 from "./components/shapes/rectangle3";
// import Diamond from "./components/shapes/diamond";

const random = num => Math.floor(Math.random() * num) + 1;

const canvasMapOurs = [
  {shape:'rectangle', props:{x:325,y:25,stroke:'black',width:50, height:100}}, 
  {shape:'rectangle', props:{x:250,y:50,stroke:'black',width:50, height:50}}
]

const componentMap = {'rectangle':Rectangle};

const newShape = () => ({
  x: random(250),
  y: random(300),
  fill: 'red'
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
    colorIndex: canvasMapOurs.map(item => 0),
  };

  handleClick = () => {
    this.setState(prevState => ({
      canvas: [...prevState.canvas, { ...newShape() }]
    }));
  };

  // repeatingShape = (currx) => {
  //   if (currx >= 720) {
  //     console.log("on design quilt side")
  //   }
  // }

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
    console.log("new x = " + e.evt.x)    
  };

  colorChange = (indexToChange) => {
    const oldState = [...this.state.colorIndex];
    const newValue = oldState[indexToChange] + 1;
    const valueIsValid = this.state.fill[newValue];
    if(valueIsValid){
      oldState[indexToChange] = newValue
      this.setState({ colorIndex: oldState})
    }
    console.log("changes")
  };

  handleDragStateStart = () => {
    this.setState({isDragging:true});
  }

  handleDragStateEnd = () => {
    this.setState({isDragging:false});
  }

  render() {
    console.log(this.state);
    const shapeProps = {
      fill:this.state.fill, 
      colChange:this.colorChange,
      handleDragStateStart:this.handleDragStateStart,
      handleDragStateEnd:this.handleDragStateEnd
    }
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
                    {canvasMapOurs.map((shape, i)=> {
                      const Component = componentMap[shape.shape];
                      return (
                        <Component key={i} colorIndex={this.state.colorIndex[i]} {...shapeProps} indexToChange={i} {...shape.props} />
                      )
                    })}
                  {this.state.canvas.map(({ height, width, x, y }, key) => (
                    <Rect
                      key={key}
                      x={x}
                      y={y}
                      width={50}
                      height={100}
                      stroke="black"
                      draggable
                      fill="black"
                      onDragStart={this.handleDragStart}
                      onDragEnd={this.handleDragEnd}
                      onClick={(x<= 720 ? this.handleClick : this.colorChange(this.indexToChange))}
                      // onClick=if x>700{
                      //   then (OnClick={(this.colorChange)})
                      //   else OnClick={(this.handleClick)}
                      // }
                    />
                  ))}
                    {/* <Rectangle {...shapeProps}  />
                    <Rectangle2/>
                    <Rectangle3/>
                    <Square/>
                    <Triangle/>
                    <Triangle2/>
                    <Diamond/>
                    <Hexagon/>
                    <Hexagon2/>
                    <Hexagon3/>
                    <Hexagon4/> */}
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
