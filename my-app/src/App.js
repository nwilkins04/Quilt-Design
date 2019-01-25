import React, { Component } from 'react';

import './App.css';
import Shapes from "./components/shapes/shapes.js";
import Colors from "./components/colors/colors.js";
// import Draggable, {DraggableCore} from "react-draggable";


class App extends Component {
  state = {
    isDragging:false
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"> Design Your Quilt
        </header>
          <div className="container">
          <div className="row">
            <div className="col">
              <div className="ColorDisplay">Colors?
                <Colors/>
              </div>
              <div className="ShapeDisplay">Shapes?
                <Shapes/>
              </div>
            </div>
            <div className="col">
              <div className="QuiltDisplay">Hopefully quilt shows up here
              </div>
            </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
