import React from "react";
import { FaDatabase } from "react-icons/fa6";
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
                <div className="col-md-4">
                  <div class="card Card-Animate">
                    {expert.svg}
                    <div class="card-body">
                      <h3 class="card-title">{expert.title}</h3>
                      <p class="card-text">{expert.para}</p>
                    </div>
                     <div className="box"></div>
                  </div>
                    

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
