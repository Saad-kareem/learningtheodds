import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./styling/navbar.css";
import "./styling/home.css";
import "./styling/card.css";
import "./styling/About.css";
import "./styling/online.css";
import "./styling/expertise.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
