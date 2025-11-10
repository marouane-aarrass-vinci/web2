import { useState } from "react";
import "./ColorBox.css";

const colors = ["red","green","blue","yellow","violet","cyan","grey","black"];

const ColorBox=() =>{
    const[currentColor,setColor]=useState(0);

    return(
        <div
        className="color-style"
        style={{backgroundColor:colors[currentColor]}}
        >
            <button className="button-style"
            onClick={()=>{
                setColor((currentColor+1)%colors.length);
            }}
            >
                {colors[(currentColor+1)%colors.length]}
            </button>
            <h3>{colors[currentColor]}</h3>
        </div>
    )
};
export default ColorBox;