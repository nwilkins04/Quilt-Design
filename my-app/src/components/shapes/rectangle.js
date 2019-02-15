import React, {Component} from "react";
import { Rect } from "react-konva";
import "./shapes.css";

class Rectangle extends Component {
    state={
        startX: this.props.x,
        startY: this.props.y,
        colorIndex: this.props.colorIndex
    }

    handleDragStart = (event) => {

    }

    colorChange = (e) => {
        console.log("change color")
        let newIndex = (this.state.colorIndex + 1) % this.props.colors.length
        this.setState({
            colorIndex: newIndex
        }, () => {
            e.target.setAttrs({
                fill:this.props.colors[this.state.colorIndex]
            })
        })
    }

    render() {
        return(
        <Rect className="TallRectangle"
            x={this.props.x}
            y={this.props.y}
            width={this.props.width}
            height={this.props.height}
            stroke={this.props.stroke}
            draggable
            fill={this.props.colors[this.props.colorIndex]}
            onDragStart={this.props.handleDragStart}
            onDragEnd={this.props.handleDragEnd}
            onClick={this.colorChange}
        />
        );
    };
}

export default Rectangle;