import React from "react";
import CommonCard from "./CommonCard";
import { ExpertiseCard } from "../sData/card1";

const Expertise = () => {
  return (
    <div>
      <div className="Expertise">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-12">
              <div className="ExpertiseBack">
                <div className="Expertise-Text">
                  <h1>Expertise</h1>
                  <p>Check out our Data Analytics Service Expertise!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" Expertise-Card">
        <div className="container">
          <div className="row">
          {ExpertiseCard.map((expert, index) => {
            return (
              <CommonCard
                img={expert.svg}
                title={expert.title}
                para={expert.para}
              />
            );
          })}
                  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
