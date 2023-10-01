import "./App.css";
import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"
// import Body from "./Homescreen/Index";
import HeroSection from "./Components/HeroSection";
import MySkills from "./Components/MySkills";
import AboutMe from "./Components/AboutMe";
import MyPortfolio from "./Components/MyPortfolio";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        {/* <div> */}
          <Navbar />
          <HeroSection />
          <MySkills />
          <AboutMe />
          <MyPortfolio />
          <ContactMe />
          <Footer />
          {/* <Body /> */}
          {/* <Routes>
            <Route path="/" element={<Body />}></Route>
            <Route path="/" element={<div>404 Not Found</div>}></Route>
          </Routes> */}
        {/* </div> */}
      {/* </Router> */}
    </div>
  );
}

export default App;