import React from "react";
import { NavLink } from "react-router-dom";
const ServiceDrop = () => {
  return (
    <div>
      <div className="container Expert-Drop Service-Drop">
        <div className="row">
          <div className="col-md-12">
            <ul className="Expert-Links">
              <li>
                <NavLink to="/odds-career-support">Career Support</NavLink>
              </li>
              <li>
                <NavLink to="/service">Consultancy</NavLink>
              </li>
              <li>
                <NavLink to="/service">Process Outsorcing </NavLink>
              </li>
              <li>
                <NavLink to="/service">Contract Resource</NavLink>
              </li>
              <li>
                <NavLink to="/service">Resume Search</NavLink>
              </li>
              <li>
                <NavLink to="/service">Capability Building</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDrop;
