import React, {useState} from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from "./pages";
import ColoringPage from "./pages/ColoringPage";
import NotAvailable from "./pages/notavailable"
import CreativeResponse from "./pages/creativeresponse"

function App() {
return (
    <div className="App">
            <Router>
                {/*<Navbar />*/}
                <Routes>
                    <Route exact path='/' exact element={<Home />} />
                    <Route path='/coloringpage' element={<ColoringPage/>} />
                    <Route path='/notavailable' element={<NotAvailable/>} />
                    <Route path='/creativeresponse' element={<CreativeResponse/>} />
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
