import React from "react";
import{ Rect, Stage, Layer } from "react-konva";

function Colors() {
    return(
        <div>
            <h2>Click the shape to change colors. Your choices are:</h2>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Rect 
                        x={20}
                        y={1}
                        width={50}
                        height={50}
                        stroke="black"
                        fill="red"
                    />
                    <Rect
                        x={80}
                        y={1}
                        width={50}
                        height={50}
                        stroke="black"
                        fill="orange"
                    />
                    <Rect
                        x={140}
                        y={1}
                        height={50}
                        width={50}
                        stroke="black"
                        fill="yellow"
                    />
                    <Rect
                        x={200}
                        y={1}
                        height={50}
                        width={50}
                        stroke="black"
                        fill="green"
                    />
                    <Rect
                        x={260}
                        y={1}
                        height={50}
                        width={50}
                        stroke="black"
                        fill="blue"
                    />
                    <Rect
                        x={320}
                        y={1}
                        height={50}
                        width={50}
                        stroke="black"
                        fill="purple"
                    />
                    <Rect
                        x={380}
                        y={1}
                        height={50}
                        width={50}
                        stroke="black"
                        fill="brown"
                    />
                    <Rect
                        x={440}
                        y={1}
                        height={50}
                        width={50}
                        stroke="black"
                        fill="black"
                    />
                    <Rect
                        x={500}
                        y={1}
                        height={50}
                        width={50}
                        stroke="black"
                        fill="white"
                    />
                </Layer>
            </Stage>
        </div>
    )
};

export default Colors;