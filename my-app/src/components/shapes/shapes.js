// import React from "react";
// import { Stage, Layer, Rect, Line, } from "react-konva";

import "./shapes.css";

// var width = window.innerWidth;
// var height = window.innerHeight;
// var stage = new Konva.Stage ({
//     container: 'container',
//     width: width,
//     height: height
// });
// var layer = new Konva.Layer();
// var triangle = new Konva.RegularPolygon({
//     x: 80,
//     y: 120,
//     sides: 3,
//     radius: 50,
//     fill: '#00D2FF',
//     stroke: "black"
// });

// function Triangle(){
//     var width = window.innerWidth;
// var height = window.innerHeight;
// var stage = new Konva.Stage ({
//     container: 'container',
//     width: width,
//     height: height
// });
// var layer = new Konva.Layer();
// var triangle = new Konva.RegularPolygon({
//     x: 80,
//     y: 120,
//     sides: 3,
//     radius: 50,
//     fill: '#00D2FF',
//     stroke: "black"
// });

//     return(
//         triangle.on('click', function() {
//             var fill = this.fill() === 'yellow' ? '#00D2FF' : 'yellow';
//             this.fill(fill);
//             layer.draw();
//         });
//         layer.add(triangle);
//         stage.add(layer);
//     );
// }

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

export default Triangle;