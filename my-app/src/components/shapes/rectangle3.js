import React, {Component} from "react";
import { Rect } from "react-konva";

import Rectangle from "./rectangle";

import "./shapes.css";

class Rectangle3 extends Component{

        render () {
        return(
            <Rect onClick={<Rectangle/>}
            x={380}
            y={85}
            width={100}
            height={50}
            stroke="black"
            />
        )
    }

}

export default Rectangle3;