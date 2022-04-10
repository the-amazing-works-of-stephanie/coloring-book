import React, {useState} from "react";
// import {useParams, useHistory} from 'react-router-dom';
import ColorTheShire from "../components/theshire";
import Gollum from '../components/gollum'
import ColorPalette from '../components/colorpalette'
import Eraser from '../components/eraser'
import "./pages.css"

const ColoringPage = () => {
    // const history = useHistory();
    const [fillColors, setFillColors] = useState(Array(393).fill('white'))
    const [currentColor, setCurrentColor] = useState('white')

    const onFillColor = (i) => {
        let newFillColors = fillColors.slice(0)
        newFillColors[i] = currentColor
        setFillColors(newFillColors)
    }

    return (
        <div className="ColoringPage">
            <div className='header-container'>
                <div className="Shire-header">Let's color the Shire!</div>
            </div>
            <div className="theshire">
                <ColorTheShire fillColors={fillColors} onFill = {onFillColor} />
            </div>
            <div className="paletteContainer">
                <ColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
            </div>
            <div className="eraserContainer">
                <div className="subheader">Eraser</div>
                <Eraser currentColor={currentColor} changeColor={setCurrentColor}/>
            </div>
            {/* need to make a square on the upper half of the page to contain the image
            should have zoom in/out capabilities & be a specific size (800x600?)
            how to check if image is horizontal or vertically-aligned? maybe I can put a special variable into the svg
            file and then check that variable to see what size the square should be */}
            {/* also need a box to contain the different colors in the color palette
            box is size-locked to a specific size with scroll enabled
            perhaps there will be headers for each "type" of color, like regular vs gradient vs pattern? */}
        </div>
    )
}

export default ColoringPage;