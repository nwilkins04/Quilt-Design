import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Members from "./members";
import App from "./App";

class Client extends Component {
    render() {
        return(
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path ="/" component={App} />
                        <Route exact path="/members" component={Members}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Client;