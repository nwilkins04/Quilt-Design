import React, {Component} from "react";
import { Line } from "react-konva";
import "./shapes.css";

class Diamond extends Component {
    state = {
        startX: this.props.x,
        startY: this.props.y,
        colorIndex: this.props.colorIndex
    };
    
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
        <Line className="Diamond"
            x={this.props.x}
            y={this.props.y}
            points={this.props.points}
            closed
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

export default Diamond;