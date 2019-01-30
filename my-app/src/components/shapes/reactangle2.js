import React, {Component} from "react";
import { Rect } from "react-konva";
import "./shapes.css";

class Rectangle2 extends Component {
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
        <Rect onClick={(this.colorChange)}
            x={250}
            y={25}
            width={50}
            height={200}
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

export default Rectangle2;