import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import ConnexionTrueRoute from "./ConnexionTrueRoute";

import NotFound from "../pages/NotFound";
import Home from "../pages/public/site/Home";
import Register from "../pages/public/site/Register";
import SignIn from "../pages/public/site/SignIn";

import ProjectDash from "../pages/private/ProjectDash";
import RouteList from "../pages/private/RouteList";
import UserPage from "../pages/private/UserPage";
import ForgotPassword from "../pages/public/site/ForgotPassword";

// RouteBrowser component for creating different routes for the application.
export default function RouteBrowser() {
  return (
    <BrowserRouter>
      {/* <Routes> component from 'react-router-dom' */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/register"
          element={
            <ConnexionTrueRoute>
              <Register />
            </ConnexionTrueRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <ConnexionTrueRoute>
              <SignIn />
            </ConnexionTrueRoute>
          }
        />

        <Route
          path={"/project"}
          element={
            <PrivateRoute>
              <ProjectDash />
            </PrivateRoute>
          }
        />
        <Route
          path={"/list/:id"}
          element={
            <PrivateRoute>
              <RouteList />
            </PrivateRoute>
          }
        />
        <Route
          path={"/user"}
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
