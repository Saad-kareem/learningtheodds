import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [FirstName, setFname] = useState("");
  const [LastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setcPassword] = useState("");

  const SendData = async (e) => {
    e.preventDefault();
    try {
      let resp = await fetch("http://localhost:8000/SignUp", {
        method: "POST",
        body: JSON.stringify({
          FirstName,
          LastName,
          email,
          password,
          confirmPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        // Store JWT securely
        localStorage.setItem("token", data.token);
      });
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="SignUP">
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="First Name"
            value={FirstName}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Last Name"
            value={LastName}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>{" "}
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setcPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={SendData}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
