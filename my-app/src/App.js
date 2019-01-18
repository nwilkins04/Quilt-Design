import React, { Component } from 'react';

import './App.css';
import Square from "./components/shapes/shapes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Square>
          </Square>
        </header>
      </div>
    );
  }
}

export default App;
