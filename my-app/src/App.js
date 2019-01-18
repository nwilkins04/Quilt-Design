import React, { Component } from 'react';

import './App.css';
import Square from "./components/shapes/shapes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> Design Your Quilt
        </header>
          <div className="Body">
            <div className="ColorDisplay">Colors?</div>
            <div className="ShapeDisplay">Shapes?
              <Square>

              </Square>
            </div>
            <div className="QuiltDisplay">Hopefully quilt shows up here</div>
          </div>
      </div>
    );
  }
}

export default App;
