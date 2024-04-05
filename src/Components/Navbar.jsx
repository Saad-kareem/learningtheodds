import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaSalesforce, FaSearch } from "react-icons/fa";
import TrainingSub from "../expertise/TrainingSub";
import ExpertDrop from "../expertise/ExpertDrop";
import ServiceDrop from "../expertise/ServiceDrop";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [openTraining, setTrainOpen] = useState(false);
  const [openExpert, setOpenExpert] = useState(false);
  const [openService, setOpenService] = useState(false);

  const TrainingOpen = () => {
    setTrainOpen(true);
  };
  const closeTrain = () => {
    setTrainOpen(false);
  };

  const ExpertiseOpen = () => {
      if(!openExpert){
        setOpenExpert(true);
      }
      else{
        setOpenExpert(false);
      }
  };

  const ServiceOpen = () => {
    if (!openService) {
      setOpenService(true);
    } else {
      setOpenService(false);
    }
  };
  // const closeService = () => {
  //   setOpenService(false);
  // };

  return (
    <div>
      <nav className=" NavBar navbar navbar-expand-lg navbar-light  ">
        <div className="container ">
          <NavLink className="Odd-logo" to="/">
            Learning the Odds
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul
              className="NavBar-list navbar-nav  me-auto mb-2 mb-lg-0"
              style={{ fontSize: 19 }}
            >
              <li className="nav-item">
                <NavLink className="nav-link  home-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>

              <li className="nav-item Hover ">
                <NavLink
                  className="nav-link"
                  to="/expertise"
                  onMouseEnter={ExpertiseOpen}
                >
                  Our Expertise
                </NavLink>
              </li>

              {openExpert && <ExpertDrop />}
              <li className="nav-item ">
                <NavLink
                  className="nav-link"
                  to="/"
                  onMouseEnter={TrainingOpen}
                  onMouseLeave={closeTrain}
                >
                  Trainings
                </NavLink>
              </li>
              {openTraining && <TrainingSub />}
              <li className="nav-item ">
                <NavLink
                  className="nav-link"
                  to="/service"
                  onMouseEnter={ServiceOpen}
                >
                  Services
                </NavLink>
              </li>
              {openService && <ServiceDrop />}
              <li className="nav-item SearchBar ">
                <NavLink className="nav-link" to="/">
                  <FaSearch className="Nav-search" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
