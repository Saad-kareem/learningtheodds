import React from "react";
import CareerCoaching from "../Assets/CareerCoach.png";
import { TiTick } from "react-icons/ti";

const MainCareer = (props) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="Career-Coaching">
          <div className="row CareerHand">
            <div className="col-md-6">
              <img src={props.img} />
            </div>
            <div className="col-md-6">
              <h3>{props.heading}</h3>
              <ul>
                <li>
                  <span>{props.tick}</span> {props.li1}
                </li>
                <li>
                  <span>{props.tick}</span> {props.li2}
                </li>
                <li>
                  <span>{props.tick}</span> {props.li3}
                </li>
                <li>
                  <span>{props.tick}</span> {props.li4}
                </li>
                <li>
                  <span>{props.tick1}</span> {props.li5}
                </li>

                <li>
                  <span>{props.tick1}</span> {props.li6}
                </li>
              </ul>
              <button className="btn ">AVAIL NOW!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCareer;
