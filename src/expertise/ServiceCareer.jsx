import React from "react";
import { Member } from "../sData/Member";
import { IoIosArrowForward } from "react-icons/io";
import CareerCoaching from "../Assets/CareerCoach.png";
import Benefit1 from "../Assets/6.png";
import carerPortfolio from "../Assets/5.png";
import Resume1 from "../Assets/3.png";
import interview1 from "../Assets/4.png";
import { TiTick } from "react-icons/ti";
import MainCareer from "./MainCareer";
import MainCoach2 from "./MainCoach2";

const ServiceCareer = (props) => {
  return (
    <div className="Service-Career">
      <div className="container-fluid">
        <div className="CareerBack">
          <div className="row">
            <div className="col-md-6">
              <div className="Career-heading">
                <h2>Dice Career Support</h2>
                <p>Your Altimate Data Analytics 1 on 1 Career Coaching</p>
                <div className="Career-Button">
                  <a href="#" className=" d-block">
                    Private Coaching Session{" "}
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </a>
                  <a href="#" className=" d-block">
                    Get Industry Ready Portfolio{" "}
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </a>
                  <a href="#" className="d-block">
                    LinkedIn Profile Building{" "}
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </a>
                  <a href="#" className=" d-block">
                    Interview Preparation{" "}
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div></div>
            </div>
          </div>
        </div>
        <div className="YoutubeBack">
          <div className="Career-Youtube">
            <div className="row ">
              <div className="col-md-6">
                <h2>
                  Don’t make the same mistakes others are making to land
                  yourself to the right opportunity!
                </h2>
                <p>
                  Dice Career Support will help you gain confidence & insight in
                  your career & provide you a chance to find your true calling
                  in the Data Analytics Domain.
                </p>
              </div>
              <div className="col-md-6">
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
              </div>
            </div>
          </div>
        </div>

        <MainCareer
          img={CareerCoaching}
          heading="Customized Coaching"
          tick=<TiTick />
          tick1=<TiTick />
          li1=" Advice on making career decisions"
          li2="1 on 1 ice breaking session LIVE with Experts"
          li3="  Get guidance on how to transition your career"
          li4="  Suggestions on setting your goals and objectives"
          li5="  Repository/worksheet to set short term & long term career goal."
          li6=" Designing a career track just for you according to your personal goals & interests.   "
        />

        <MainCoach2
          img={carerPortfolio}
          heading="Industry Ready portfolio "
          tick=<TiTick />
          li1=" Get guidance on which certifications, tools & skills to master to build a strong portfolio "
          li2=" Get help in branding portfolios on Kaggle & GitHub "
        />

        <MainCareer
          img={Resume1}
          heading="Resume & LinkedIn Profile Building"
          tick=<TiTick />
          li1="  Feedback on your current resume & LinkedIn Profile"
          li2="Tips & Tricks to improve your profile to stand out the competition"
          li3="   Making your resume powerful enough to catch the recruiters eye"
          li4="  Why are they not getting that interview call? "
        />

        <MainCoach2
          img={interview1}
          heading=" Interview Preparation"
          tick1=<TiTick />
          tick=<TiTick />
          li1="  An insight into recruitment process"
          li2=" Confident tone & pitch during an interview"
          li3="  Domain related questions / How to answer tricky questions?"
          li4=" Mock Interview session"
        />
        <MainCareer
          img={Benefit1}
          heading="Benefits"
          tick=<TiTick />
          li1="   Access to a resource or networking group for post mentoring assistance"
          li2=" Exclusive discounts on our public trainings"
          li3="   Learning material"
          li4="  Suggestions on setting your goals and objectives"
        />
        <div className="row ODDS-Founder Founders Odd-Team">
        <h1>Meet your Personal Career Experts!</h1>
        <div className="Founder-Team">
          {Member.map((Item) => (
            <div className="col-md-3 ">
              <img src={Item.image} />
              <h5>{Item.Name}</h5>
              <p>{Item.Type}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
         
       

    </div>
  );
};

export default ServiceCareer;
