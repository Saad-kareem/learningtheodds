import React from "react";
import Hero4 from "../Assets/hero4.png";
import Hero1 from "../Assets/hero1.png";
import Hero5 from "../Assets/hero5.png";
const HeroSection = () => {
  return (
    <div className="Hero-Section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 Hero-left">
            <h1>Learn Live from your home!</h1>
            <p>
              Don't Panic with the CoronaVirus outbreak! Use this time as an
              oppoturnity to Learn from Home with Learning the ODDS
            </p>
            <button className="btn ">Explore Training</button>
          </div>
          <div className="col-md-4 Hero-right">
            <img className="hero4" src={Hero4} />
            <div>
              <img className="hero1" src={Hero1} />
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
