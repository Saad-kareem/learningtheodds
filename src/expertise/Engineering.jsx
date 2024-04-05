import React from "react";
import Engineer from "../Assets/Engineer.png";
import { EngineerCard } from "../sData/card1";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import Case from "./Case";

const Engineering = () => {
  return (
    <div className="Engineering">
      <div className="container-fluid">
        <div className="Back-Engineer">
          <div className="row">
            <div className="col-md-6">
              <img src={Engineer} />
            </div>
            <div className="col-md-6">
              <h1>Data Engineering</h1>
              <p>
                We at Dice Analytics, believe in delivering the best-in-class
                performance by developing powerful Data Engineering solutions
                that integrate seamlessly with your business model and fuel its
                growth.
              </p>
            </div>
          </div>
        </div>
        <div className="AI-Card">
          <div className="row Expertise-Card">
            {EngineerCard.map((expert, index) => {
              return (
                <div className="col-md-6">
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
      <Case
        heading="Case Study"
        Arrow=<MdOutlineArrowCircleRight />
        case1=" PAF Big Data Cluster Deployment"
        case2=" Shifa International Hospital"
        case3=" RMS - NCOC"
        case4=" SECP - Search Engine"
        case5="Data Science"
      />
    </div>
  );
};

export default Engineering;
