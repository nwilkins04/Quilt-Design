import React, {Component} from "react";

class Refresh extends Component {
    render() {
        return(
            <button className="refreshButton">Refresh Page</button>
        )
    }
};

export default Refresh;

// onClick={window.location.reload()}