import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/dashboard";
import Home from "../../pages/home";
import NotFound from "../../pages/notfound";
import Profile from "../../pages/profile";
import Services from "../../pages/services";
import SignUP from "../../pages/signup";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="signup" element={<SignUP />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
