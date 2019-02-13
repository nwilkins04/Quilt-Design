import React, {Component} from "react";
import { Rect } from "react-konva";
import "./shapes.css";

class Rectangle extends Component {

    render() {
        console.log(this.props);
        return(
        <Rect onClick={() =>(this.props.colChange(this.props.indexToChange))}
            x={this.props.x}
            y={this.props.y}
            width={this.props.width}
            height={this.props.height}
            stroke={this.props.stroke}
            draggable
            fill={this.props.fill[this.props.colorIndex]}
            onDragStart={this.props.handleDragStateStart}
            onDragEnd={this.props.handleDragStateEnd}
        />
        );
    };
}

export default Rectangle;