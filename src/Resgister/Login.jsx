import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SendData = async (e) => {
    e.preventDefault();

    const resp = await fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Store JWT securely
        localStorage.setItem("token", data.token);
        // setToken(data.token);
      });
    navigate("/");
  };
  //  console.log('The protected token is ',tokens);
  return (
    <div className="SignUP">
      <form>
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

        <button type="submit" className="btn btn-primary" onClick={SendData}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
