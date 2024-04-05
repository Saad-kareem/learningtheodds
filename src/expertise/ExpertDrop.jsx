import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ExpertDrop = () => {
  return (
    <div className="container Expert-Drop">
      <div className="row">
        <div className="col-md-12">
          <ul className="Expert-Links">
            <li>
              <NavLink to="/artificial-intelligence">
                Artificial Intelligence
              </NavLink>
            </li>
            <li>
              <NavLink>Data Analytics</NavLink>
            </li>
            <li>
              <NavLink>Data Engineering</NavLink>
            </li>
            <li>
              <NavLink>Software Development</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpertDrop;
