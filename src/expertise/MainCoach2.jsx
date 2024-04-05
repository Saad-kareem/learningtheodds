import React from "react";
import carerPortfolio from "../Assets/5.png";
import { TiTick } from "react-icons/ti";
const MainCoach2 = (props) => {
  return (
    <div className="container-fluid">
      <div className="Career-Portfolio">
        <div className="row CareerHand">
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
                <span>{props.tick1}</span> {props.li3}
              </li>

              <li>
                <span>{props.tick1}</span> {props.li4}
              </li>
            </ul>
            <button className="btn ">AVAIL NOW!</button>
          </div>
          <div className="col-md-6">
            <img src={props.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCoach2;
