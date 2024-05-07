import React, { useState, useEffect } from "react";
import RouterBrowser from "./routes/RouteBrowser"; // Importing RouteBrowser component
import { AuthProvider } from "./context/AuthProvider";
import axios from "axios";
import { Toaster } from "sonner";

import InfoSizeScreen from "./pages/InfoSizeScreen"; // Importing InfoSizeScreen component

export default function App() {
  // use .env file to store the REACT_APP_API_URL
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;

  // screen size detection for mobile devices
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => setScreenSize(window.innerWidth);
  useEffect(() => {
    console.log(window.location.pathname);
    if (window.location.pathname === "/") {
      setIsMobile(false);
    } else {
      if (screenSize < 1200) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  return (
    <AuthProvider>
      {isMobile ? <InfoSizeScreen /> : <RouterBrowser />}
      <Toaster position="top-right" theme="dark" />
    </AuthProvider>
  );
}
