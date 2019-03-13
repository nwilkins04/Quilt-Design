import React, {Component} from "react";

import './members.css';

import Title from "./components/Header/Title"

class Members extends Component {
    render() {
        return (
            <div className="memberPage">
                <header>
                <strong>Welcome!</strong>
                </header>
                <div className= "App"><Title/></div>
                <div className="container">
                    <div className="SavedQuilts">
                        <h2>Your Saved Quilts</h2>
                    </div>
                    <div className="LargerView">
                        <h2>View Your Quilts Here</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Members;