import React, {useState} from "react";
// import {useParams, useHistory} from 'react-router-dom';
import Flower from '../components/clear-flower';
import ColorPalette from '../components/colorpalette';

const ColoringPage = () => {
    // const history = useHistory();
    const [fillColors, setFillColors] = useState(Array(5).fill('white'))
    const [currentColor, setCurrentColor] = useState('blue')

    const onFillColor = (i) => {
        let newFillColors = fillColors.slice(0)
        newFillColors[i] = currentColor
        setFillColors(newFillColors)
    }

    //right now we will just render one picture to color, but I will try to add more pictures in the future if I can!
    //NOTE: need to rearrange layout of page. also add eraser????
    return (
        <div className = "ColoringPage">
            <div><h1>Welcome to the coloring page!</h1></div>
            <div className="flower">
                <Flower fillColors={fillColors} onFill = {onFillColor} />
            </div>
            <ColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
        </div>
    )
}

export default ColoringPage;