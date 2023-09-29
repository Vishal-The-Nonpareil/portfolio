import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./Homescreen/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;