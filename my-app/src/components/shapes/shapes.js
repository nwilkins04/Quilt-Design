import React from "react";
import { Stage, Layer, Rect, Line, } from "react-konva";

import "./shapes.css";

function Shapes() {
    return(
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Rect
                    x={20}
                    y={25}
                    width={200}
                    height={50}
                    stroke="black"
                    draggable
                    onDragStart={() => {
                        this.setState({
                            isDragging: true
                        });
                    }}
                    onDragEnd={() => {
                        this.setState({
                            isDragging: false
                        });
                    }} 
                />
                <Rect
                    x={20}
                    y={100}
                    width={50}
                    height={50}
                    stroke="black"
                />
                <Line
                    x={10}
                    y={125}
                    points={[55, 50, 10, 50, 55, 100]}
                    closed
                    stroke="black"
                />
            </Layer>
        </Stage>
    );
};

export default Shapes;