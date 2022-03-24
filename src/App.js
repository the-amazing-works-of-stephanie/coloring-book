import React, {useState} from "react";
import './App.css';
// import Navbar from './navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from "./pages";
import ColoringPage from "./pages/ColoringPage";

function App() {
return (
    <div className="App">
            <Router>
                {/*<Navbar />*/}
                <Routes>
                    <Route exact path='/' exact element={<Home />} />
                    <Route path='/coloringpage' element={<ColoringPage/>} />
                </Routes>
            </Router>
        </div>
    );
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
