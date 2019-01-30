import React, {Component} from "react";
import { Line } from "react-konva";
import "./shapes.css";

class Triangle extends Component {
    state = {
        isDragging: false,
        fill: ["lightgrey", "red", "orange", "yellow", "green", "blue", "purple", "brown", "black"],
        colorIndex: 0
    };
    
    colorChange = () => {
        let newIndex = (this.state.colorIndex + 1) % this.state.fill.length
        this.setState({ colorIndex: newIndex})
    }

    render() {
        return(
        <Line onClick={(this.colorChange)}
            x={10}
            y={125}
            points={[55, 50, 10, 50, 55, 100]}
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

export default Triangle;