import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Home from "../pages/public/site/Home";
import Register from "../pages/public/site/Register";
import SignIn from "../pages/public/site/SignIn";

import ProjectDash from "../pages/private/ProjectDash";
import RouteList from "../pages/private/RouteList";
import Editor from "../pages/private/Editor";

// RouteBrowser component for creating different routes for the application.
export default function RouteBrowser() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
    console.log("isAuthenticated: ", token);
  }, []);


  return (
    <BrowserRouter>
      {/* <Routes> component from 'react-router-dom' */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/register" element={isAuthenticated ? <Navigate to="/project" replace /> : <Register />} />
        <Route path="/signin" element={isAuthenticated ? <Navigate to="/project" replace /> : <SignIn />} />

        {/* <Route path="/project" element={isAuthenticated ? <ProjectDash /> : <Navigate to="/signin" replace />} />
        <Route path="/list/:id" element={isAuthenticated ? <RouteList /> : <Navigate to="/signin" replace />} />
        <Route path="/editor/:id" element={isAuthenticated ? <Editor /> : <Navigate to="/signin" replace />} /> */}

        {/* <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} /> */}
        {
          isAuthenticated && (
            <>
              <Route path="/project" element={<ProjectDash />} />
              <Route path="/list/:id" element={<RouteList />} />
              <Route path="/editor/:projectId/:id" element={<Editor />} />
            </>
          )
        }

      </Routes>
    </BrowserRouter>
  );
}
