import React from 'react'
import GradientPath from 'gradient-path';
// import colorGradient from 'javascript-color-gradient'

export default function ColorPalette(props) {

    const sunsetGradient = [
        {color: '#833ab4', pos: 0},
        {color: '#ff0000', pos: 25},
        {color: '#fcb045', pos: 82}]

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

    // const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'turquoise', 'purple', 'pink', 'deeppink', gp.render({type: 'path', fill: sunsetGradient, width: 10})]
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'turquoise', 'purple', 'pink', 'deeppink', 'url(#gradient)']

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