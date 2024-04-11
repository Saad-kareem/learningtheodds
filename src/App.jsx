import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Expertise from "./Components/Expertise";
import Service from "./Components/Service";
import AI from "./expertise/AI";
import ServiceCareer from "./expertise/ServiceCareer";
import Online1 from "./Components/Online";
import OnlineTrain from "./Components/OnlineTrain";
import Footer2 from "./Components/Footer2";
import Footer3 from "./Components/Footer3";
import MessageOPen from "./Components/MessageOPen";

const App = () => {
  const [open, setOPen] = useState(true);
  const [open1, setOPen1] = useState(false);
  const [ftr3, setFtr3] = useState(false);

  const OPenFooter = () => {
    setOPen(true);
    setOPen1(false);
    setFtr3(false);
  };
  const OPenFooter2 = () => {
    setOPen1(true);
    setOPen(false);
    setFtr3(false);
  };
  const OPenFooter3 = () => {
    setFtr3(true);
    setOPen1(false);
    setOPen(false);
  };
  return (
    <div>
      <Router>
        <Online1 />
        <Navbar
          OPenFooter={OPenFooter}
          OPenFooter2={OPenFooter2}
          OPenFooter3={OPenFooter3}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/artificial-intelligence" element={<AI />} />
          <Route path="/recruitment/services/" element={<Service />} />
          <Route path="/odds-career-support" element={<ServiceCareer />} />
          <Route path="/live-trainings" element={<OnlineTrain />} />
        </Routes>
          <MessageOPen/>
        {open && <Footer2 />}
        {open1 && <Footer />}
        {ftr3 && <Footer3 />}
      </Router>
    </div>
  );
};

export default App;
