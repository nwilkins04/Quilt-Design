import React, {Component} from "react";

class Refresh extends Component {
    
    refreshPage = () => {
        window.location.reload()
    }
    
    render() {
        return(
            <button className="refreshButton" onClick={() => this.refreshPage()}>Refresh Page</button>
        )
    }
};

export default Refresh;

// onClick={window.location.reload()}