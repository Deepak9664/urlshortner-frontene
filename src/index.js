import React from "react";
import ReactDOM from "react-dom/client";
// import HomePage from "./homePage";
import App from "./App";
import Background from "./Background";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Background/>
    
  </React.StrictMode>
);
