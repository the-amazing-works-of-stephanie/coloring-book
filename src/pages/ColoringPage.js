import React, {useState} from "react";
// import {useParams, useHistory} from 'react-router-dom';
import Flower from '../components/clear-flower';
import Gollum from '../components/gollum'
import ColorPalette from '../components/colorpalette';
import Eraser from '../components/eraser'
import "./pages.css"

const ColoringPage = () => {
    // const history = useHistory();
    const [fillColors, setFillColors] = useState(Array(14).fill('white'))
    const [currentColor, setCurrentColor] = useState('white')

    const onFillColor = (i) => {
        let newFillColors = fillColors.slice(0)
        newFillColors[i] = currentColor
        setFillColors(newFillColors)
    }

    //right now we will just render one picture to color, but I will try to add more pictures in the future if I can!
    //NOTE: need to rearrange layout of page.
    return (
        <div className="ColoringPage">
            <div className='header-container'>
                <div className="header">Welcome to the coloring page!</div>
            </div>
            <div className="gollum">
                <Gollum fillColors={fillColors} onFill = {onFillColor} />
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
            {/*<div className="flower">*/}
            {/*    <Flower fillColors={fillColors} onFill = {onFillColor} />*/}
            {/*</div>*/}
        </div>
    )
}

export default ColoringPage;