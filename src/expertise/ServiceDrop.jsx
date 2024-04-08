import React from "react";
import { NavLink } from "react-router-dom";
const ServiceDrop = ({OPenFooter2}) => {
  return (
    <div>
      <div className="container Expert-Drop Service-Drop">
        <div className="row">
          <div className="col-md-12">
            <ul className="Expert-Links">
              <li>
                <NavLink onClick={OPenFooter2}
                 to="/odds-career-support">Career Support</NavLink>
              </li>
              <li>
                <NavLink to="/recruitment/services/">Consultancy</NavLink>
              </li>
              <li>
                <NavLink to="/recruitment/services/">
                  Process Outsorcing{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/recruitment/services/">Contract Resource</NavLink>
              </li>
              <li>
                <NavLink to="/recruitment/services/">Resume Search</NavLink>
              </li>
              <li>
                <NavLink to="/recruitment/services/">
                  Capability Building
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDrop;
