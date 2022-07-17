import React, {useState} from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from "./pages";
import ColoringPage from "./pages/ColoringPage";
import ShireColoringPage from "./pages/ShireColoringPage";
import NotAvailable from "./pages/notavailable"

function App() {
return (
    <div className="App">
            <Router>
                <Routes>
                    <Route exact path='/' exact element={<Home />} />
                    <Route path='/coloringpage' element={<ColoringPage/>} />
                    <Route path='/shirecoloringpage' element={<ShireColoringPage/>} />
                    <Route path='/notavailable' element={<NotAvailable/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
