import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "../Assets/dice-logo.png";
import TrainingSub from "../expertise/TrainingSub";
import ExpertDrop from "../expertise/ExpertDrop";
import ServiceDrop from "../expertise/ServiceDrop";
import Search from "./Search";

const Navbar = ({ OPenFooter, OPenFooter2, OPenFooter3, SearchOPen }) => {
  const [show, setShow] = useState(false);
  const [openTraining, setTrainOpen] = useState(false);
  const [openExpert, setOpenExpert] = useState(false);
  const [openService, setOpenService] = useState(false);

  const TrainingOpen = () => {
    setTrainOpen(true);
  };

  const closeTrain = () => {
    setTimeout(() => {
      setTrainOpen(false);
    }, 0);
  };

  const ExpertiseOpen = () => {
    setOpenExpert(true);
  };

  const closeExpertise = () => {
    setTimeout(() => {
      setOpenExpert(false);
    }, 2000);
  };
  const ServiceOpen = () => {
    setOpenService(true);
  };
  const closeService = () => {
    setTimeout(() => {
      setOpenService(false);
    }, 2000);
  };

  return (
    <div className="Main-Navbar">
      <nav className=" NavBar navbar navbar-expand-lg navbar-light  ">
        <div className="container ">
          <NavLink className="Odd-logo" to="/">
            LEARNING THE ODDS
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
                <NavLink
                  className="nav-link  home-link"
                  to="/"
                  onClick={OPenFooter}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/About" onClick={OPenFooter}>
                  About
                </NavLink>
              </li>

              <li className="nav-item Hover ">
                <NavLink
                  className="nav-link"
                  to="/expertise"
                  onMouseEnter={ExpertiseOpen}
                  onMouseLeave={closeExpertise}
                  onClick={OPenFooter}
                >
                  Our Expertise
                </NavLink>
              </li>

              {openExpert && <ExpertDrop OPenFooter3={OPenFooter3} />}
              <li className="nav-item ">
                <NavLink
                  className="nav-link"
                  to="/"
                  onMouseEnter={TrainingOpen}
                  onMouseLeave={closeTrain}
                  onClick={OPenFooter}
                >
                  Trainings
                </NavLink>
              </li>
              {openTraining && <TrainingSub />}
              <li className="nav-item ">
                <NavLink
                  className="nav-link"
                  to="/recruitment/services/"
                  onMouseEnter={ServiceOpen}
                  onMouseLeave={closeService}
                  onClick={OPenFooter}
                >
                  Services
                </NavLink>
              </li>
              {openService && <ServiceDrop OPenFooter2={OPenFooter2} />}
              <li className="nav-item SearchBar ">
                <NavLink
                  className="nav-link"
                  onMouseUp={SearchOPen}
                  onClick={OPenFooter}
                >
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
