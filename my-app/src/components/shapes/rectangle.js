import React, {Component} from "react";
import { Rect } from "react-konva";
import "./shapes.css";

class Rectangle extends Component {
    state = {
        isDragging: false,
        fill: ["lightgrey", "red", "orange", "yellow", "green", "blue", "purple", "brown", "black", "white"],
        colorIndex: 0,
        initalx: 20,
        intialy: 25
    };
    
    colorChange = () => {
        let newIndex = (this.state.colorIndex + 1) % this.state.fill.length
        this.setState({ colorIndex: newIndex})
    }

    showShape () {
            return(
                <Rect onClick={(this.colorChange)}
                x={this.state.initalx}
                y={this.state.intialy}
                width={100}
                height={50}
                stroke="black"
                draggable
                ref="rect"
                fill={this.state.fill[this.state.colorIndex]}
                onDragStart={() => {
                    this.setState({
                        initalx:this.x,
                        intialy:this.y,
                        isDragging: true
                    });
                }}
                onDragEnd={this.handleDragEnd}
            />
            )
        }
    
    handleDragEnd= (e) => {
        console.log("something")
         this.setState({
             isDragging: false
        })
        this.setState({
            initalx: 20,
            intialy: 25
        })
        // console.log(this.refs.rect)
    }

    render() {
        return(
        this.showShape()
        )};
}

export default Rectangle;