import React from 'react'
import './colorpalette.css'
import gradient1 from "./gradient1";
import GradientPath from 'gradient-path';
// import colorGradient from 'javascript-color-gradient'

export default function Eraser(props) {
    const colors = ["#FFFFFF"]

    return(
        <div className="color-palette">
            {colors.map(color => {
                const activeClass = props.currentColor === color ? 'color-swatch-active' : '';
                return (
                    <div onClick={() => {props.changeColor(color)}}>
                        <div className={`color-swatch ${activeClass}`}  style={{backgroundColor: color}}></div>
                    </div>
                )
            })}
        </div>
    )
}