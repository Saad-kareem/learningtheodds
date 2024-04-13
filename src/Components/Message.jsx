import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Message = ({ MessageClose }) => {
  return (
    <div>
      <div className="Message">
        <div className="Message-Menu">
          <p className="CloseButton" onClick={MessageClose}>
            <IoClose />
          </p>
          <div className="CloseButton"></div>
          <h5>
            Please fill out the form below and we will get back to you as soon
            as possible.
          </h5>
        </div>
        <div className="Message-Input shadow-lg">
          <form
            className="form-group"
            action="https://formspree.io/f/xbjnpzyq"
            method="POST"
          >
            <input
              type="text"
              className="form-control"
              name="Name"
              placeholder="*Name"
            />
            <input
              type="email"
              className="form-control"
              name="Email"
              placeholder="*Email"
            />
            <input
              className="form-control textarea"
              placeholder="Message"
              name="Message"
            ></input>
            <button className="btn btn-warning">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Message;
