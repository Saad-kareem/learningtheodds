import React from "react";
import { FaBuildingColumns } from "react-icons/fa6";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaBriefcase } from "react-icons/fa";
import { FaBlackTie } from "react-icons/fa";
import { Member } from "../sData/Member";

const Impact = () => {
  return (
    <div>
      <div className="Impact">
        <div className="Back-Impact">
          <h1 className="Impact-Heading">Our Impact</h1>
          <p className="Impact-para">
            At Learning the ODDS, we empower professionals by offering them an
            opportunity to get skilled with top-notch trainers & then assist
            them in landing their dream jobs!
          </p>
              <div className="conatiner Member">
          <div className="row Founders">
            <h1>Our Team</h1>
            {Member.map((Item) => (
              <div className="col-md-3">
                <img src={Item.image} />
                <h5>{Item.Name}</h5>
                <p>{Item.Type}</p>
              </div>
            ))}
          </div>
          </div>
          <div className="Main-Impact">
            <div className="Training">
              <span>
                {" "}
                <FaBuildingColumns /> 1
              </span>
              <p>Public Training</p>
            </div>
            <div className="Graduate">
              <span>
                {" "}
                <RiGraduationCapLine /> 2+
              </span>
              <p>Graduates</p>
            </div>
            <div className="Training">
              <span>
                {" "}
                <FaBriefcase /> 0
              </span>
              <p>Projects</p>
            </div>
            <div className="Graduate">
              <span>
                {" "}
                <FaBlackTie /> 100%
              </span>
              <p>Job Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
