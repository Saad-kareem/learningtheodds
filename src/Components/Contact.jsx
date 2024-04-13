import React from "react";
import { BsFillPinAngleFill } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="ContactBack">
              <div className="About-Text">
                <h1>Contact Us</h1>
                <p>Get in touch with us!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ContactPart">
          <h2>Fill the form below</h2>
          <p>Happy to help, we will get back to you as early as possible.</p>
          <div className="row">
            <div className="col-md-5">
              <form action="https://formspree.io/f/xbjnpzyq" method="POST">
                <div className="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Umar"
                    name="Name"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="umar123@gmail.com"
                    name="Email"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="03496581580"
                    name="Phone Number"
                  />
                </div>
                <label for="exampleFormControlTextarea1">Your Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="Message"
                  rows="3"
                ></textarea>

                <button type="submit" className="btn btn-warning">
                  Submit
                </button>
              </form>
            </div>

            <div className="col-md-6 contact-right1">
              <p>
                <span>
                  <BsFillPinAngleFill />
                </span>
                1st Floor, Al-Rehman Chamber, Fazl-ul-Haq Rd, Blue Area,
                Islamabad.
              </p>
              <p>
                <span>
                  <CiGlobe />
                </span>
                www.learningtheodds.com
              </p>
              <p className="contactCall">
                <span>
                  <IoCall />
                </span>
                +923496581580
              </p>
              <p className="contactCall">
                <span>
                  <MdOutlineEmail />
                </span>
                info@odds.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
