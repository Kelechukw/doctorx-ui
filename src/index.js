import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import MainRoutes from "./routes";

import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.js";
import "./assets/styles/bootstrap4/bootstrap.min.css";
import "./assets/styles/main_styles.css";
import "./assets/styles/responsive.css";
import "./assets/plugins/OwlCarousel/owl.carousel.css";
import "./assets/plugins/OwlCarousel/owl.theme.default.css";
import "./assets/plugins/OwlCarousel/animate.css";

import "./utils/fontawesome";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <MainRoutes />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
