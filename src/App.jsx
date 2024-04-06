import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Expertise from "./Components/Expertise";
import Service from "./Components/Service";
import AI from "./expertise/AI";
import ServiceCareer from "./expertise/ServiceCareer";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/artificial-intelligence" element={<AI />} />
          <Route path="/recruitment/services/" element={<Service />} />
          <Route path="/odds-career-support" element={<ServiceCareer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
