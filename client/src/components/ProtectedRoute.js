import React from "react";
import { Route, Redirect } from "react-router-dom";

//TODO: Protected Route will check whether user is authenticated and redirect user otherwise.
const ProtectedRoute = ({ component: Component, ...rest }) => {
  //TODO: Set up isAuth
  // const isAuth = () => {
  //   return localStorage.getItem("Authentication");
  // };

  // return (
  //   // <Route
  //   //   {...rest}
  //   //   render={() => (isAuth() ? <Component /> : <Redirect to="/login" />)}
  //   // />

  //   // <Route>{isAuth ? <Component /> : <Redirect to="/login" />}</Route>
  // );
};

export default ProtectedRoute;
