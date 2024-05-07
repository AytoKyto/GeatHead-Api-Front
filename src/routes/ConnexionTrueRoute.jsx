import React from "react";
import { Navigate } from "react-router-dom";

const ConnexionTrueRoute = ({ children }) => {
  // If authenticated, redirect to the dashboard
  if (localStorage.getItem("token")) {
    return <Navigate to="/project" replace />;
  }

  // If not authenticated, render the provided children
  return children;
};

export default ConnexionTrueRoute;
