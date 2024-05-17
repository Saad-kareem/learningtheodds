import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Message = ({ MessageClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const SubmitData = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/messages", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    MessageClose();
  };

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
          <form className="form-group">
            <input
              type="text"
              className="form-control"
              required
              name={name}
              placeholder="*Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="form-control"
              required
              name={email}
              placeholder="*Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="form-control textarea"
              placeholder="Message"
              required
              name={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn btn-warning" onClick={SubmitData}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Message;
