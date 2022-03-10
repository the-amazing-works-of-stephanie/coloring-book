import React, {useState} from "react";
import './App.css';
import Flower from './clear-flower';
import ColorPalette from './colorpalette';

const App = () => {
  const [fillColors, setFillColors] = useState(Array(5).fill('white'))
  const [currentColor, setCurrentColor] = useState('blue')

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    setFillColors(newFillColors)
  }

  return (
      <div className = "App">
        <div className="flower">
          <Flower fillColors={fillColors} onFill = {onFillColor} />
        </div>
          <ColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
      </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
