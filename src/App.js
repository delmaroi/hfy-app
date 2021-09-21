import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./index.css";

ReactDOM.render(
  <Suspense fallback={null}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
