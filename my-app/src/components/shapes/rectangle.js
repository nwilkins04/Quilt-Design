import React, {Component} from "react";
import { Rect } from "react-konva";
import "./shapes.css";

class Rectangle extends Component {
    // state = {
    //     isDragging: false,
    //     fill: ["lightgrey", "red", "orange", "yellow", "green", "blue", "purple", "brown", "black", "white"],
    //     colorIndex: 0
    // };
    
    // colorChange = () => {
    //     let newIndex = (this.state.colorIndex + 1) % this.state.fill.length
    //     this.setState({ colorIndex: newIndex})
    // }

    render() {
        console.log(this.props);
        return(
        <Rect onClick={(this.props.colChange)}
            x={325}
            y={25}
            width={50}
            height={100}
            stroke="black"
            draggable
            fill={this.props.fill[this.props.colorIndex]}
            onDragStart={this.props.handleDragStateStart}
            onDragEnd={this.props.handleDragStateEnd}
        />
        );
    };
}

export default Rectangle;