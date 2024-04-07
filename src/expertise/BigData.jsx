import React from "react";
import BigData1 from "../Assets/BigData.png";
import { BigCard } from "../sData/card1";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import Case from "./Case";
const BigData = () => {
  return (
    <div className="BigData" id="Big-Data-Analytics">
      <div className="container-fluid">
        <div className="row Big-Data">
          <div className="col-md-6">
            <h1>Big Data Analytics</h1>
            <p>
              Digitalization not only helps in automating the business
              operations but also brings the luxury of deep insights to support
              in making informed business decisions. Big data analytics is one
              such strategy adopted by various businesses, which is a process of
              collecting, organizing and analyzing large amount of data to
              uncover hidden patterns, unknown correlations, customer
              preferences, and other vital information that can assist
              businesses make informed decisions.
            </p>
            <p>
              We at Dice Analytics, believe in delivering the best-in-class
              performance by developing powerful Big Data Analytics solutions
              that integrate seamlessly with your business model and fuel its
              growth.
            </p>
          </div>
          <div className="col-md-6">
            <img src={BigData1} />
          </div>
        </div>
        <div className="AI-Card">
          <div className="row Expertise-Card">
            {BigCard.map((expert, index) => {
              return (
                <div className="col-md-6" key={index}>
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
        Arrow1=<MdOutlineArrowCircleRight />
        case1="	SAARC"
        case2="	Press Information Department (PID)"
        case3="UNDP Dashboard"
        case4="RMS - NCOC"
        case5="	DMS - PRCS"
        case6="	DMS - NDMA"
        case7="Shifa International Hospital"
        case8="World Bank / PPRA – Text to Insights Tool"
      />
    </div>
  );
};

export default BigData;
