import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import MainRoutes from "./routes";
import { socket, SocketContext } from "./socket/socket";

import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.js";
import "./assets/styles/bootstrap4/bootstrap.min.css";
import "./assets/styles/main_styles.css";
import "./assets/styles/responsive.css";
import "./assets/styles/form.css";

import "./assets/styles/chat.css";
import "./assets/styles/about.css";

ReactDOM.render(
  <React.StrictMode>
    <SocketContext.Provider value={socket}>
      <ErrorBoundary>
        <MainRoutes />
      </ErrorBoundary>
    </SocketContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
