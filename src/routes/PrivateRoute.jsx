import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { userData } = useContext(AuthContext);

  if (!userData) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default PrivateRoute;
