import React from "react";
import HeroSection from "./HeroSection";
import CardSection from "./CardSection";
import Impact from "./Impact";
import Explore from "./Explore";

const Home = () => {
  return (
    <div className="Home">
       <HeroSection/>
        <CardSection/>
         <Impact/>
          <Explore/>
    </div>
  );
};

export default Home;
