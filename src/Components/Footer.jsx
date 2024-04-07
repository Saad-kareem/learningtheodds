import React, { useState } from "react";
import Student from "../expertise/Student";
import Work from "../expertise/Work";

const Footer = () => {
  const [student, setStudent] = useState(false);
  const [work, setWork] = useState(false);

  const openStudent = () => {
    if (!student) {
      setStudent(true);
      setWork(false);
    }
  };
  const openWork = () => {
    if (!work) {
      setWork(true);
      setStudent(false);
    }
  };

  return (
    <div className="Footer">
      <div className="container">
        <div className="FooterContact">
          <h1>Thank you for stopping by!</h1>
          <p>
            Fill out the form to schedule a session with our representatives &
            get in touch with our Career experts !
          </p>
          <input type="text" className="input1" placeholder="Name" />
          <input
            type="text"
            className="input1"
            placeholder="Mobile no.(ex.03496581580)"
          />
          <input type="email" className="input1 input2" placeholder="Email" />
          <input type="text" className="input1 input2" placeholder="City" />

          <div className="Footer_Radio">
            <input
              class="form-check-input "
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onClick={openStudent}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Student
            </label>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onClick={openWork}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Working Professional
            </label>
          </div>

          {student && <Student />}
          {work && <Work />}
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
  );
};

export default Footer;
