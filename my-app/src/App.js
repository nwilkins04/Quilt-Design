import React, { Component } from 'react';

import './App.css';
// import Square from "./components/shapes/shapes";
import { Stage, Layer, Rect, Line } from "react-konva";

// const rectangle = () => {
//   return(
//       <Stage width={window.innerWidth} height={window.innerHeight}>
//           <Layer>
//               <Rect
//               x={300}
//               y={50}
//               width={200}
//               height={100}
//               stroke="black"
//               fill="red"
//               />
//           </Layer>
//       </Stage>
//   );
// };

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> Design Your Quilt
        </header>
          <div className="Body">
            <div className="ColorDisplay">Colors?</div>
            <div className="ShapeDisplay">Shapes?
            <Stage width={window.innerWidth} height={window.innerHeight}>
              <Layer>
                <Rect
                x={20}
                y={25}
                width={200}
                height={50}
                stroke="black"
                />
                <Rect
                x={20}
                y={100}
                width={50}
                height={50}
                stroke="black"
                />
                <Line
                x={10}
                y={125}
                points={[55, 50, 10, 50, 55, 100]}
                closed
                stroke="black"
                />
              </Layer>
            </Stage>
            </div>
            <div className="QuiltDisplay">Hopefully quilt shows up here</div>
          </div>
      </div>
    );
  }
}

export default App;
