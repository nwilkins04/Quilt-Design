import React from "react";
import { Stage, Layer, Rect, Line, } from "react-konva";

import "./shapes.css";

var stage = new Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
});

var layer = new Layer();

var hexagon = new Haxagon({
    x: 100,
    y: 150,
    sides: 6,
    radius: 70,
    stroke: 'black',
});



// function Shapes() {
//     return(
//         <Stage width={window.innerWidth} height={window.innerHeight}>
//             <Layer>
//                 <Rect
//                     x={20}
//                     y={25}
//                     width={200}
//                     height={50}
//                     stroke="black"
//                     draggable
//                     onDragStart={() => {
//                         this.setState({
//                             isDragging: true
//                         });
//                     }}
//                     onDragEnd={() => {
//                         this.setState({
//                             isDragging: false
//                         });
//                     }} 
//                 />
//                 <Rect
//                     x={20}
//                     y={100}
//                     width={50}
//                     height={50}
//                     stroke="black"
//                 />
//                 <Line
//                     x={10}
//                     y={125}
//                     points={[55, 50, 10, 50, 55, 100]}
//                     closed
//                     stroke="black"
//                 />
//                 <Line
//                   x={30}
//                   y={250}
//                   points={[0, -5, 50, -5, 75, 40, 50, 85, 0, 85, -25, 40,]}
//                   stroke="black"
//                   closed
//                 />
//             </Layer>
//         </Stage>
//     );
// };

export default layer.add(hexagon);