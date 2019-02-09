import React, {Component} from "react";
import { Rect } from "react-konva";
import "./shapes.css";

class Square extends Component {
    state = {
        isDragging: false,
        fill: ["lightgrey", "red", "orange", "yellow", "green", "blue", "purple", "brown", "black", "white"],
        colorIndex: 0
    };
    
    colorChange = () => {
        let newIndex = (this.state.colorIndex + 1) % this.state.fill.length
        this.setState({ colorIndex: newIndex})
    }

    // handleClick = () => {
    //     this.rect.cache();
    // }

    render() {
        return(
        <Rect onClick={(this.colorChange)}
            x={20}
            y={100}
            width={50}
            height={50}
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

export default Square;