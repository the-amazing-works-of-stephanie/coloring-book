import React from 'react'
import colorGradient from 'javascript-color-gradient'

export default function ColorPalette(props) {

    const sunsetGradient = ['#833ab4', '#ff0000', '#fcb045']

    // const colorCellFromValue = (params, value = 10, midpoint = 31) => {
    //     const getColorIndex = Math.round(midpoint * value);
    //     return colorGradient
    //         .setGradient(...params)
    //         .setMidpoint(midpoint).getColor(getColorIndex === 0 ? 0.01 : getColorIndex);
    // };

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'turquoise', 'purple', 'pink', 'deeppink', colorCellFromValue(sunsetGradient)]

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