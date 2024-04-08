import React from "react";
import Scroll from "./Scroll";

const Footer2 = () => {
  return (
    <div>
      <div className="Footer">
        <div className="container">
          <div className="FooterContact">
            <h1>Get In Touch With Us Today!</h1>
            <p>
              We are here to help you succeed in your goals! Get in touch with
              us today and we’ll get back to you as quickly as possible!
            </p>
            <button className="btn btn-outline-warning mt-4">CONTACT US!</button>
          </div>
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
      </div>
        <Scroll/>
    </div>
  );
};

export default Footer2;
