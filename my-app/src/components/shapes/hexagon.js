import React, {Component} from "react";
import { Line } from "react-konva";
import "./shapes.css";

class Hexagon extends Component {
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
            x={30}
            y={250}
            points={[0, -5, 50, -5, 75, 40, 50, 85, 0, 85, -25, 40]}
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

export default Hexagon;