import React from "react";
import { NavLink } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";

const Online1 = () => {
  return (
    <div className="Online">
      <button className="btn ">
        {" "}
        <NavLink to="/live-trainings">
          <span>
            <CiPlay1 />
          </span>
          Learn Online with ODDS!
        </NavLink>
      </button>
    </div>
  );
};

export default Online1;
