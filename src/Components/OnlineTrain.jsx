import React from "react";
import { OnlineTrain1 } from "../sData/card1";
import OnlineService from "../Assets/OnlineService.jpg";
import approach from "../Assets/544.jpg";
import OnlineLast from "../Assets/Online-Last.jpg";
const OnlineTrain = () => {
  return (
    <div className="OnlineTrain">
      <div className="container-fluid">
        <div className="OnlineBack">
          <div className="Online-Heading">
            <h1>Empowering Data Analytics Ecosystem Online!</h1>
            <p>Anywhere You Want. Everywhere You’d Like.</p>
          </div>
        </div>
        <div className="AboutTraining">
          <h2>About our Live Trainings</h2>
          <p>
            To continue empowering Data Analytics Ecosystem, we at Dice
            Analytics use combination of market data, learners’ data, industry
            experts and skill map models to create the Live Training Programs
            which are ready to be opted by tech skill seekers. We partner with
            companies and individuals to address their unique needs, providing
            training and coaching that helps working professionals and students
            achieve their career goals while ensuring convenience and
            flexibility as the key offerings.
          </p>
        </div>
        <div className="OnlineService">
          <img src={OnlineService} />
        </div>
        <div className="AboutTraining">
          <h2>Our Approach for Live Classes</h2>
          <p>
            After establishing a reputable Physical Training Model, based on our
            stellar records and customer earned trust we gradually progressed to
            establish the same reputation in the Live Training Model. We are
            committed to empower you by making our trainings accessible,
            interactive, and well curated specifically to your objective.
          </p>
        </div>
        <div className="OnlineService">
          <img src={approach} />
        </div>
        <div className="row Card-Section OnlineCard">
          <div className="Online-Card-Heading">
            <h4>Our Training Programs</h4>
            <p>
              We aim to develop quality professionals, who withstand the
              challenges being faced in the world of Data. Here are our offered
              Interactive zoom based Trainings.
            </p>
          </div>
          {OnlineTrain1.map((data, index) => {
            return (
              <div className="col-md-4 " key={index}>
                <div className="card flip-card  " id="onlinecard">
                  <img
                    className="card-img-top"
                    src={data.img}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="OnlineLast ">
          <img src={OnlineLast} />
        </div>
      </div>
    </div>
  );
};

export default OnlineTrain;
