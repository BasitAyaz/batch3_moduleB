import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./screens/about";
import Home from "./screens/home";
import Services from "./screens/services";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route
            path="*"
            element={
              <>
                <h1>404 Page Not Found</h1>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
