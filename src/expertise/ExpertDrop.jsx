import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ExpertDrop = ({OPenFooter3}) => {
  return (
    <div className="container Expert-Drop">
      <div className="row">
        <div className="col-md-12">
          <ul className="Expert-Links">
            <li>
              <NavLink to="/artificial-intelligence"
                onClick={OPenFooter3}
              >
                Artificial Intelligence
              </NavLink>
            </li>
            <li>
              <NavLink to="/artificial-intelligence/#Big-Data-Analytics">
                Data Analytics
              </NavLink>
            </li>
            <li>
              <NavLink to="/artificial-intelligence/#Data-Engineering">
                Data Engineering
              </NavLink>
            </li>
            <li>
              <NavLink to="/artificial-intelligence/#Enterprise-Software-Development">
                Software Development
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpertDrop;
