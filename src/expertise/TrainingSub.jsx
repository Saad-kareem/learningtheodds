import React from "react";
import { NavLink } from "react-router-dom";
import { TrainLink } from "../sData/card1";

const TrainingSub = () => {
  return (
    <div className="container Sub-training">
      <div className="row ">
        {TrainLink.map((items, index) => {
          return (
            <div className="col-md-4">
              <ul className="Sub-link">
                <li>
                  <NavLink>{items.link1}</NavLink>
                </li>
                <li>
                  <NavLink>{items.link2}</NavLink>
                </li>
                <li>
                  <NavLink>{items.link3}</NavLink>
                </li>
                <li>
                  <NavLink>{items.link4}</NavLink>
                </li>
                <li>
                  <NavLink>{items.link5}</NavLink>
                </li>
                <li>
                  <NavLink>{items.link6}</NavLink>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrainingSub;
