import React, { Component } from "react";
import Login from "./LogIn";

class Title extends Component {

    render() {
        return(
            <header className="App-header">
            <strong>Design Your Quilt</strong>
            <Login/>
            </header>
        )
    }

}

export default Title;