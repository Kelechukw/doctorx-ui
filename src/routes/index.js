import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/auth/Login";
import Signout from "../pages/auth/Signout";
import Homepage from "../pages/homepage";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={Homepage} />
        <PublicRoute exact path="/logoin" component={Login} />
        <ProtectedRoute exact path="/signout" component={Signout} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
