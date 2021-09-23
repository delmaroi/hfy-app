import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "sanitize.css/sanitize.css";
import "antd/lib/date-picker/style/css";
import Routes from "./Routes";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
