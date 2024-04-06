import React from "react";
import enterprise1 from "../Assets/enterprise.png";
import { SoftwareCard } from "../sData/card1";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import Case from "./Case";

const Enterprise = () => {
  return (
    <div className="EnterPrises" id="Enterprise-Software-Development">
      <div className="container-fluid">
        <div className="row EnterPriseBack">
          <div className="col-md-6">
            <h1>Enterprise Software Development </h1>
            <p>
              We at Dice Analytics, believe in delivering the best-in-class
              performance by developing powerful Enterprise Software that
              integrate seamlessly with your business model and fuel its growth.
            </p>
          </div>

          <div className="col-md-6">
            <img src={enterprise1} />
          </div>
        </div>
        <div className="AI-Card">
          <div className="row Expertise-Card">
            {SoftwareCard.map((expert, index) => {
              return (
                <div className="col-md-6">
                  <div class="card Card-Animate">
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
        case1="	DMS - PRCS"
        case2=" RMS - NCOC"
        case3="	World Bank / PPRA – Text to Insights Tool"
        case4=" SECP - Search Engine"
        case5="	Press Information Department (PID)"
      />
    </div>
  );
};

export default Enterprise;
