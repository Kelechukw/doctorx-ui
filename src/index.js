import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import MainRoutes from "./routes";

import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.js";
import "./assets/styles/bootstrap4/bootstrap.min.css";
import "./assets/styles/main_styles.css";
import "./assets/styles/responsive.css";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <MainRoutes />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
