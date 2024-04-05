import React from "react";
import AI2 from "../Assets/AI2.png";
import { AICard } from "../sData/card1";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import BigData from "./BigData";
import Case from "./Case";
import Engineering from "./Engineering";
import Enterprise from "./Enterprise";

const AI = () => {
  return (
    <div className="AI">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="AIBack">
              <div className="Service-Text">
                <h1>Our Expertise</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row AI-World">
          <div className="col-md-6">
            <img src={AI2} />
          </div>
          <div className="col-md-6 AI-left">
            <h2>Artificial Intelligence</h2>
            <p>
              Artificial Intelligence is the most disruptive technology that has
              opened new opportunities for businesses to reduce operational
              costs, increase efficiency, grow revenue and improve customer
              experience by utilizing the full range of smart AI technologies
              into their processes and products including machine learning,
              natural language processing and more.
            </p>
            <p className="AI-Para">
              We at Dice Analytics, believe in delivering the best-in-class
              performance by developing powerful AI solutions that integrate
              seamlessly with your business model and fuel its growth.
            </p>
          </div>
        </div>
        <div className="AI-Card">
          <div className="row Expertise-Card">
            {AICard.map((expert, index) => {
              return (
                <div className="col-md-6 AI-Sub-Card">
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
        case1=" Completion Score - UNDP Training"
        case2=" 	Chat Bot - SECP"
        case3=" 	Credit Scoring – Bank Al-Falah"
        case4=" 	Sentiment Analysis – IK’s 3rd Wedding"
        case5="	World Bank / PPRA – Text to Insights Tool"
      />
      <BigData />
       <Engineering/>
        <Enterprise/>
    </div>
  );
};

export default AI;
