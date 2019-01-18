import React from "react";
import Konva from "konva";
import { Stage, Layer, Rect, } from "react-konva";

import "./shapes.css";

function Square() {
    return(
        <Stage>
            <Layer>
                <Rect
                x={300}
                y={50}
                width={200}
                height={100}
                stroke="black"
                fill="red"
                />
            </Layer>
        </Stage>
    );
}

export default Square;