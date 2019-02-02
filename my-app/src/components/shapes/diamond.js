import React, {Component} from "react";
import { Line } from "react-konva";
import "./shapes.css";

class Diamond extends Component {
    state = {
        isDragging: false,
        fill: ["lightgrey", "red", "orange", "yellow", "green", "blue", "purple", "brown", "black", "white"],
        colorIndex: 0
    };
    
    colorChange = () => {
        let newIndex = (this.state.colorIndex + 1) % this.state.fill.length
        this.setState({ colorIndex: newIndex})
    }


    render() {
        return(
        <Line onClick={(this.colorChange)}
            x={350}
            y={200}
            points={[0, -5, 25, 40, 2, 80, 0, 85, -25, 40]}
            closed
            stroke="black"
            draggable
            fill={this.state.fill[this.state.colorIndex]}
            onDragStart={() => {
                this.setState({
                    isDragging: true
                });
            }}
            onDragEnd={() => (
                this.setState({
                    isDragging: false
                })
            )}
        />
        );
    };
}

export default Diamond;