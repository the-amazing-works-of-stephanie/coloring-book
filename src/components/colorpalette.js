import React from 'react'
import './colorpalette.css'
import gradient1 from "./gradient1";
import GradientPath from 'gradient-path';
// import colorGradient from 'javascript-color-gradient'

export default function ColorPalette(props) {
    // const gp = new GradientPath({
    //     path: document.querySelector('#gradient-path path'),
    //     segments: 30,
    //     samples: 3,
    //     precision: 2
    // });

    // const colorCellFromValue = (params, value = 10, midpoint = 31) => {
    //     const getColorIndex = Math.round(midpoint * value);
    //     return colorGradient
    //         .setGradient(...params)
    //         .setMidpoint(midpoint).getColor(getColorIndex === 0 ? 0.01 : getColorIndex);
    // };

    const colors = ["#1F4275", "#aaa9ad", "#391802", "#006a4e", "#af002a", "#ffe135", '#gradient1', "#bd33a4", "#318ce7",
        "#66b447", "#46cb18", "#ff7f00", "#00c3e3", "#512888", "#0072bb", "#e94196", "#EA3D3D", "#EED41F", "#400090"]

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