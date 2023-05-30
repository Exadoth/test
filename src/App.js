import React from "react";
import Navbar from "./Components/Navbar";
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
          </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
