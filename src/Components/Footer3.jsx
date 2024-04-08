import React from "react";
import Scroll from "./Scroll";

const Footer3 = () => {
  return (
    <div className=" Footer3 ">
      <div className="container">
        <div className="row Sub-Footer">
          <div className="col-md-3">
            <ul>
              <li>
                <h4>Reach Us</h4>
              </li>
              <li>
                <span>Phone:</span> +923496581580
              </li>
              <li>
                <span>Email:</span>saadkareem2481@gmail.com
              </li>
              <li>
                <span>Address:</span>1st Floor, Al-Rehman Chamber, Blue Area,
                Islamabad, Pakistan
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li>
                <h4>What we do?</h4>
              </li>
              <li>Trainings & Workshop Recruitment Career Suppor</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li>
                <h4>Top Trainings</h4>
              </li>
              <li>
                Data Science & Machine Learning Data Warehouse & Business
                Intelligence Business Analytics Power BI DevOps
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li>
                <h4>Looking for info</h4>
              </li>
              <li>
                <input placeholder="Search" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Scroll/>
    </div>
  );
};

export default Footer3;
