/**
 * Application entry point. Mounts the root React component into the DOM.
 * React.StrictMode helps surface potential issues (e.g. unsafe lifecycles) in development.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
