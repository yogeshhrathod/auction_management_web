import React from "react";
import { connect } from "react-redux";

import { Route, Redirect } from "react-router-dom";

const SessionRouter = ({ component: Component, ...rest }) => {
  const user = {
    isAuthenticated:
      localStorage.getItem("token") && localStorage.getItem("user")
        ? true
        : false
  };

  return (
    <Route
      {...rest}
      render={props =>
        user.isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default connect()(SessionRouter);
