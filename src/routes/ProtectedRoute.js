import React from "react";
import { Route, Redirect } from "react-router";
import store from "store";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = store.get("accessToken");
      if (typeof currentUser === "undefined" || currentUser === null) {
        return (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        );
      }

      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

export default ProtectedRoute;
