import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
  
      if (!token) {
        navigate("/signin");
      }
    }, []);
  
    return (
      <Route
        {...rest}
        element={
          isAuthenticated ? <Component {...rest} /> : <Navigate to="/signin" replace />
        }
      />
    );
  };
  
  export default PrivateRoute;