import React from "react";
import Cookies from "js-cookie";
import { Redirect, Route, RouteProps } from "react-router-dom";

const PrivateRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const isAuthenticated = !!Cookies.get("token");

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!isAuthenticated)
          return (
            <Redirect
              to={{
                pathname: "/admin/login",
                state: { from: location },
              }}
            />
          );
      }}
    />
  );
};

export default PrivateRoute;
