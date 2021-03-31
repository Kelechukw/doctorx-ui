import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Signout from "../pages/auth/Signout";
import Homepage from "../pages/homepage";
import Chat from "../pages/chat";
import About from "../pages/about";
import WaitingRoom from "../pages/WaitingRoom";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={Homepage} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/chat" component={Chat} />
        <PublicRoute exact path="/about" component={About} />
        <PublicRoute exact path="/waiting-room" component={WaitingRoom} />
        <ProtectedRoute exact path="/signout" component={Signout} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
