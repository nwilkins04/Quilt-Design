import React, { Component } from "react";
import Login from "./LogIn";

class Title extends Component {

    render() {
        return(
            <header className="App-header">
            Design Your Quilt
            <Login/>
            </header>
        )
    }

}

export default Title;